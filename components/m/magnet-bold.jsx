import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/crd2je-4i.css';
import '../../css/f/fxwwtlavh.css';
import '../../css/q/qkrmpnbsi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="crd2je-4i"/><path class="fxwwtlavh"/><path class="qkrmpnbsi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:magnet-bold"} {...others} />);
}

export default Component;
