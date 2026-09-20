import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bycit6wxf.css';
import '../../css/k/kacizpspf.css';
import '../../css/w/wc8ir2bmw.css';
import '../../css/z/zatvd6v5h.css';
import '../../css/v/v5ppz-73d.css';
import '../../css/m/m3sgi22re.css';
import '../../css/y/yh-royb9w.css';
import '../../css/n/nw1iqy_dm.css';
import '../../css/d/d9k957dxa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="bycit6wxf"/><path class="kacizpspf"/><path class="wc8ir2bmw"/><path class="zatvd6v5h"/><path class="v5ppz-73d"/><path class="m3sgi22re"/><path class="yh-royb9w"/><path class="nw1iqy_dm"/><path class="d9k957dxa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:app-window-clock"} {...others} />);
}

export default Component;
