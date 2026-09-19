import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/a/a83-n7b5d.css';
import '../../css/r/rp7_zebgd.css';
import '../../css/l/lnl1wm-up.css';
import '../../css/d/dgogtjsii.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGB2Ja9bgT"><g class="rohhhzb0l"><path class="a83-n7b5d"/><rect transform="rotate(-90 13 44)" class="rp7_zebgd"/><circle class="lnl1wm-up"/><path class="dgogtjsii"/></g></mask></defs><path mask="url(#SVGB2Ja9bgT)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:passport-one"} {...others} />);
}

export default Component;
