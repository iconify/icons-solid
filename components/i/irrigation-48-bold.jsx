import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cw81v4b0k.css';
import '../../css/w/we9umj_bg.css';
import '../../css/s/skrwrisfb.css';
import '../../css/s/syf7pwril.css';
import '../../css/d/dbi3s-yeb.css';
import '../../css/w/wjirir1ff.css';
import '../../css/z/zawwqbb1w.css';
import '../../css/k/kw5pr0bth.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="cw81v4b0k"/><path class="we9umj_bg"/><path class="skrwrisfb"/><path class="syf7pwril"/><path class="dbi3s-yeb"/><path class="wjirir1ff"/><path class="zawwqbb1w"/><path class="kw5pr0bth"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:irrigation-48-bold"} {...others} />);
}

export default Component;
