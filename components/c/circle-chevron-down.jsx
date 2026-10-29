import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/csivk-nbx.css';
import '../../css/z/znu966bzc.css';
import '../../css/z/zjm716l0n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="csivk-nbx wm-k"/><path class="wm-a znu966bzc"/><path class="wm-a zjm716l0n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:circle-chevron-down"} {...others} />);
}

export default Component;
