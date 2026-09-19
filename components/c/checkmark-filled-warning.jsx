import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yo-01obuo.css';
import '../../css/w/wz_fdacbr.css';
import '../../css/c/cyoweacxi.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="yo-01obuo"/><path class="wz_fdacbr"/><path class="cyoweacxi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:checkmark-filled-warning"} {...others} />);
}

export default Component;
