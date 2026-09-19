import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fx4703bpk.css';
import '../../css/g/gc07aup3p.css';
import '../../css/z/zp2_tubhd.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="fx4703bpk"/><path class="gc07aup3p"/><path class="zp2_tubhd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:nuxtjs"} {...others} />);
}

export default Component;
