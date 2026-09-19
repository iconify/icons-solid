import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qtybzhb-n.css';
import '../../css/w/wzu2pnbnw.css';
import '../../css/u/ud3082axt.css';
import '../../css/n/n-3pbac3h.css';
import '../../css/h/hiuokkbaw.css';
import '../../css/p/puunwybpm.css';
import '../../css/x/xlbr06yrb.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGBFK2wbkf"><g class="ft5dv1b6b"><path class="qtybzhb-n"/><path class="wzu2pnbnw"/><circle class="ud3082axt"/><circle class="n-3pbac3h"/><circle class="hiuokkbaw"/><circle class="puunwybpm"/><path class="xlbr06yrb"/></g></mask></defs><path mask="url(#SVGBFK2wbkf)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:oscillator"} {...others} />);
}

export default Component;
