import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o93lq-byo.css';
import '../../css/e/e__15wuqa.css';
import '../../css/o/o0fi95bse.css';
import '../../css/w/wjiueob9l.css';
import '../../css/z/z2dm66b-w.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="o93lq-byo"><path class="e__15wuqa"/><path class="o0fi95bse"/><path class="wjiueob9l"/><path class="z2dm66b-w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:sport"} {...others} />);
}

export default Component;
