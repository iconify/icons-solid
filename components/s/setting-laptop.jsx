import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/k/kbesibb3g.css';
import '../../css/r/raiutmb2i.css';
import '../../css/x/x2401pk9v.css';
import '../../css/g/g6li1jbuk.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGP3yuicip"><g class="rohhhzb0l"><path class="kbesibb3g"/><path class="raiutmb2i"/><circle class="x2401pk9v"/><path class="g6li1jbuk"/></g></mask></defs><path mask="url(#SVGP3yuicip)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:setting-laptop"} {...others} />);
}

export default Component;
