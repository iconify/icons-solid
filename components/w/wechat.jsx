import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d8zv-pbte.css';
import '../../css/a/akcz0pbfv.css';
import '../../css/v/vj7ljeput.css';
import '../../css/a/avmflzcfr.css';
import '../../css/r/r71w843fn.css';
import '../../css/c/caobj3ufi.css';
import '../../css/u/uj3dqhbie.css';
import '../../css/f/fh3lokb9l.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGsg2DBbWw"><g class="ft5dv1b6b"><path clip-rule="evenodd" class="d8zv-pbte"/><path class="akcz0pbfv"/><path class="vj7ljeput"/><path clip-rule="evenodd" class="avmflzcfr"/><path class="r71w843fn"/><path clip-rule="evenodd" class="caobj3ufi"/><path class="uj3dqhbie"/><path class="fh3lokb9l"/></g></mask></defs><path mask="url(#SVGsg2DBbWw)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:wechat"} {...others} />);
}

export default Component;
