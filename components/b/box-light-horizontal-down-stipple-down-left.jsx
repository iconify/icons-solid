import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zysb-3tfj.css';

const viewBox = {"width":22,"height":22};
const content = `<path class="zysb-3tfj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"memory:box-light-horizontal-down-stipple-down-left"} {...others} />);
}

export default Component;
