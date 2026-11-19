import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n_6u-bbja.css';
import '../../css/e/exntul_bi.css';
import '../../css/n/nm58zubph.css';
import '../../css/g/gk7n5-s2c.css';
import '../../css/a/ax2ywab9g.css';
import '../../css/z/zo2tx_bis.css';
import '../../css/g/gm6li7buc.css';
import '../../css/b/b6mcjkbgi.css';
import '../../css/d/dv6e35bbw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="n_6u-bbja"/><path class="exntul_bi"/><path class="nm58zubph"/><path clip-rule="evenodd" class="gk7n5-s2c"/><path class="ax2ywab9g"/><circle class="zo2tx_bis"/><path class="gm6li7buc"/><path class="b6mcjkbgi"/><path class="dv6e35bbw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:guitars"} {...others} />);
}

export default Component;
