import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tun7kpbmr.css';
import '../../css/a/a2uaf5emu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="secondary tun7kpbmr"/><path class="a2uaf5emu primary"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:folder-duo"} {...others} />);
}

export default Component;
