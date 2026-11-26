import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sualifbcr.css';
import '../../css/h/hvpxoqb_h.css';
import '../../css/h/hycx8gb8q.css';
import '../../css/f/f4b8c-b-i.css';
import '../../css/f/fymhh_u9f.css';
import '../../css/q/qzhzmmbdk.css';
import '../../css/c/c0kyzfb1h.css';
import '../../css/q/qhyl6spjr.css';
import '../../css/t/tntaa9boe.css';
import '../../css/r/rolghob7s.css';
import '../../css/i/iom-_vovq.css';

const viewBox = {"width":512,"height":512};
const content = `<g transform="matrix(2.4 0 0 2.4 31.882 -15.408)"><path class="sualifbcr"/><path class="hvpxoqb_h"/><path class="hycx8gb8q"/><ellipse transform="rotate(-20 150 74)" class="f4b8c-b-i"/><ellipse class="fymhh_u9f"/><ellipse class="qzhzmmbdk"/><circle class="c0kyzfb1h"/><ellipse class="qhyl6spjr"/><ellipse class="tntaa9boe"/><circle class="rolghob7s"/><path class="iom-_vovq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"xero-emoji:worm"} {...others} />);
}

export default Component;
