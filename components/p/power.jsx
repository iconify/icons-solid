import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b9n5_yi4d.css';
import '../../css/x/xvcpc4g1v.css';

const viewBox = {"width":40,"height":40};
const content = `<path class="b9n5_yi4d"/><path class="xvcpc4g1v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iwwa:power"} {...others} />);
}

export default Component;
