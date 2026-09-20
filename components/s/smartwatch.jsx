import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o5ql9abwq.css';
import '../../css/x/xp72fjboq.css';
import '../../css/i/i5t560_4t.css';
import '../../css/a/aem-obbkz.css';
import '../../css/j/jhp51zb2f.css';
import '../../css/y/y0kvvs82e.css';
import '../../css/f/fi3229bnl.css';
import '../../css/f/f9d8uj37x.css';
import '../../css/y/yw8-xphab.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="o5ql9abwq"/><circle class="xp72fjboq"/><path class="i5t560_4t"/><path class="aem-obbkz"/><path class="jhp51zb2f"/><path class="y0kvvs82e"/><circle class="fi3229bnl"/><path class="f9d8uj37x"/><circle class="yw8-xphab"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:smartwatch"} {...others} />);
}

export default Component;
