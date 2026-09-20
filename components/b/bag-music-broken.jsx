import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/vgdrhu2qc.css';
import '../../css/e/eetq4kbnf.css';
import '../../css/n/ney5_b6pk.css';
import '../../css/b/buo1kubox.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="vgdrhu2qc"/><path class="eetq4kbnf"/><path class="ney5_b6pk"/><path class="buo1kubox"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bag-music-broken"} {...others} />);
}

export default Component;
