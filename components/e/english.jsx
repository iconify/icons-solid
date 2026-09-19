import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/x/xhdah4bbl.css';
import '../../css/f/fuo9ek-wd.css';
import '../../css/e/eplyscbuc.css';
import '../../css/i/ibtlfnl1k.css';
import '../../css/c/caauuo1jf.css';
import '../../css/m/m_e-3cbqu.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="wwvp95byt"><rect class="xhdah4bbl"/><path class="fuo9ek-wd"/><path class="eplyscbuc"/><path class="ibtlfnl1k"/><path class="caauuo1jf"/><path class="m_e-3cbqu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:english"} {...others} />);
}

export default Component;
