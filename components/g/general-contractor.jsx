import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yfv2d1nvr.css';

const viewBox = {"width":50,"height":50};
const content = `<path class="yfv2d1nvr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"map:general-contractor"} {...others} />);
}

export default Component;
