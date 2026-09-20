import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v96ik30ki.css';

const viewBox = {"width":22,"height":22};
const content = `<path class="v96ik30ki"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"memory:box-outer-light-down-vertical-stipple"} {...others} />);
}

export default Component;
