import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pvnmopbkw.css';
import '../../css/q/q0xe3qbbk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pvnmopbkw"/><path clip-rule="evenodd" class="q0xe3qbbk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:flashlight-outline"} {...others} />);
}

export default Component;
