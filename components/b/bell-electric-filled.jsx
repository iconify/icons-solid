import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fpfoayb6f.css';
import '../../css/z/zp19y9ojo.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="fpfoayb6f"/><path class="zp19y9ojo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:bell-electric-filled"} {...others} />);
}

export default Component;
