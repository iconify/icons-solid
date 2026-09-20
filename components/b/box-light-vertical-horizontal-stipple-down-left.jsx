import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z576df0bp.css';

const viewBox = {"width":22,"height":22};
const content = `<path class="z576df0bp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"memory:box-light-vertical-horizontal-stipple-down-left"} {...others} />);
}

export default Component;
