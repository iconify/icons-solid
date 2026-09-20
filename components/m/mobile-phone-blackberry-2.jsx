import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n3kvrxbxq.css';
import '../../css/f/foumczboq.css';
import '../../css/x/x3d-sxbqj.css';
import '../../css/n/n6__vibbf.css';
import '../../css/c/cj3ntwopm.css';
import '../../css/m/mk5iw2tdm.css';
import '../../css/t/t-g2tc3uf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="n3kvrxbxq"/><path class="foumczboq"/><path class="x3d-sxbqj"/><path class="n6__vibbf"/><path class="cj3ntwopm"/><path class="mk5iw2tdm"/><path class="t-g2tc3uf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:mobile-phone-blackberry-2"} {...others} />);
}

export default Component;
