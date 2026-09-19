import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a79rbmb3v.css';
import '../../css/n/ncamvccot.css';
import '../../css/c/cxuzqm9iw.css';
import '../../css/r/rj_zl9bub.css';
import '../../css/q/qamrqtb4e.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/e/eb3lm3bct.css';
import '../../css/g/g670hxlke.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><path id="healthiconsNetwork4g2xOutline0" class="a79rbmb3v"/><path id="healthiconsNetwork4g2xOutline1" class="ncamvccot"/><path id="healthiconsNetwork4g2xOutline2" class="cxuzqm9iw"/><path id="healthiconsNetwork4g2xOutline3" class="rj_zl9bub"/><path id="healthiconsNetwork4g2xOutline4" class="qamrqtb4e"/></defs><g class="cuyn6tgcc"><use href="#healthiconsNetwork4g2xOutline0" clip-rule="evenodd" class="d2kvgvbvc"/><use href="#healthiconsNetwork4g2xOutline1" clip-rule="evenodd" class="d2kvgvbvc"/><use href="#healthiconsNetwork4g2xOutline2" clip-rule="evenodd" class="d2kvgvbvc"/><use href="#healthiconsNetwork4g2xOutline3" clip-rule="evenodd" class="d2kvgvbvc"/><use href="#healthiconsNetwork4g2xOutline4"/><path clip-rule="evenodd" class="eb3lm3bct"/><use href="#healthiconsNetwork4g2xOutline0" clip-rule="evenodd" class="d2kvgvbvc"/><use href="#healthiconsNetwork4g2xOutline1" clip-rule="evenodd" class="d2kvgvbvc"/><use href="#healthiconsNetwork4g2xOutline2" clip-rule="evenodd" class="d2kvgvbvc"/><use href="#healthiconsNetwork4g2xOutline3" clip-rule="evenodd" class="d2kvgvbvc"/><use href="#healthiconsNetwork4g2xOutline4"/><path clip-rule="evenodd" class="g670hxlke"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:network-4g2x-outline"} {...others} />);
}

export default Component;
