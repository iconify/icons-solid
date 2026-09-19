import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nw6aov9hv.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="nw6aov9hv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"charm:arrow-up"} {...others} />);
}

export default Component;
