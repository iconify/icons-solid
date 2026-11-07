import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/caw1b0bno.css';
import '../../css/f/fiugtjbdq.css';
import '../../css/h/hvf_gzblv.css';
import '../../css/h/hc3npei1j.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="caw1b0bno"/><path class="fiugtjbdq"/><path class="hvf_gzblv"/><path clip-rule="evenodd" class="hc3npei1j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:password-outline"} {...others} />);
}

export default Component;
