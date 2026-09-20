import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rvnqahb0g.css';
import '../../css/k/kq0zrgbil.css';
import '../../css/a/anwre5ach.css';
import '../../css/n/numjxpbko.css';
import '../../css/e/err6_8bwv.css';
import '../../css/a/a_henqblo.css';
import '../../css/c/cg2swcbkc.css';
import '../../css/g/g75wv71we.css';
import '../../css/q/q2inteaat.css';
import '../../css/q/q36_3qbgb.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rvnqahb0g"><path class="kq0zrgbil"/><path class="anwre5ach"/><path class="numjxpbko"/><path class="err6_8bwv"/><path class="a_henqblo"/><path class="cg2swcbkc"/><path class="g75wv71we"/><path class="q2inteaat"/><path class="q36_3qbgb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:industry-innovation-and-infrastructure"} {...others} />);
}

export default Component;
