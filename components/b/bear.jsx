import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v3uos8w2a.css';
import '../../css/v/vj_cr3b8d.css';
import '../../css/e/ewc_ub5sq.css';
import '../../css/f/fqg4mabhj.css';
import '../../css/w/wph_heiio.css';
import '../../css/t/tjfcf6ecx.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGwqCGKdRI"><g class="ft5dv1b6b"><path class="v3uos8w2a"/><circle class="vj_cr3b8d"/><circle class="ewc_ub5sq"/><circle class="fqg4mabhj"/><path class="wph_heiio"/><path class="tjfcf6ecx"/></g></mask></defs><path mask="url(#SVGwqCGKdRI)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:bear"} {...others} />);
}

export default Component;
