import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hh11ofkfj.css';
import '../../css/g/gitfnxp_d.css';
import '../../css/d/dsga_tbbl.css';
import '../../css/t/tov9i6bas.css';

const viewBox = {"width":24,"height":24};
const content = `<path fill="url(#SVGbYip9dXO)" class="hh11ofkfj"/><path fill="url(#SVGVIYcT2TO)" class="gitfnxp_d"/><defs><linearGradient id="SVGbYip9dXO" x1="34.383%" x2="57.623%" y1="37.415%" y2="59.204%"><stop offset="0%" class="dsga_tbbl"/><stop offset="100%" class="tov9i6bas"/></linearGradient><linearGradient id="SVGVIYcT2TO" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" class="dsga_tbbl"/><stop offset="100%" class="tov9i6bas"/></linearGradient></defs>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:openchat"} {...others} />);
}

export default Component;
