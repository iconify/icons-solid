import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g8opy5beq.css';
import '../../css/d/dfqdi8y4i.css';
import '../../css/s/szga4cbws.css';
import '../../css/o/o-s1e_sah.css';
import '../../css/o/opmelkm2y.css';
import '../../css/f/ffqnwev_v.css';

const viewBox = {"width":24,"height":24};
const content = `<path fill="url(#SVGnwUNvMZq)" transform="translate(3)" class="g8opy5beq"/><path fill="url(#SVGcHmWOFkA)" transform="translate(3)" class="dfqdi8y4i"/><path fill="url(#SVGF6YaBbeJ)" transform="translate(3)" class="szga4cbws"/><defs><linearGradient id="SVGnwUNvMZq" x1="31.373%" x2="61.365%" y1="95.551%" y2="-.348%"><stop offset="0%" class="o-s1e_sah"/><stop offset="20%" class="opmelkm2y"/><stop offset="100%" class="ffqnwev_v"/></linearGradient><linearGradient id="SVGcHmWOFkA" x1="4.366%" x2="94.359%" y1="65.982%" y2="32.918%"><stop offset="0%" class="o-s1e_sah"/><stop offset="20%" class="opmelkm2y"/><stop offset="100%" class="ffqnwev_v"/></linearGradient><linearGradient id="SVGF6YaBbeJ" x1="56.255%" x2="45.986%" y1="99.257%" y2="1.384%"><stop offset="0%" class="o-s1e_sah"/><stop offset="20%" class="opmelkm2y"/><stop offset="100%" class="ffqnwev_v"/></linearGradient></defs>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:antgroup"} {...others} />);
}

export default Component;
