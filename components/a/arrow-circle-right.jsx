import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tug4wjebt.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="tug4wjebt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codicon:arrow-circle-right"} {...others} />);
}

export default Component;
