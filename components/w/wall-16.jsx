import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m1hyej7ch.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="m1hyej7ch"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:wall-16"} {...others} />);
}

export default Component;
