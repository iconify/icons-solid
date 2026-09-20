import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d82k-pbon.css';
import '../../css/x/xluneebiq.css';
import '../../css/g/giy505bcc.css';
import '../../css/u/uwl_-tbae.css';
import '../../css/i/i_xymibps.css';
import '../../css/a/afs8u0b4g.css';

const viewBox = {"width":87.3,"height":78};
const content = `<path class="d82k-pbon"/><path class="xluneebiq"/><path class="giy505bcc"/><path class="uwl_-tbae"/><path class="i_xymibps"/><path class="afs8u0b4g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:google-drive"} {...others} />);
}

export default Component;
