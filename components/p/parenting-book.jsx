import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q88x_bcrz.css';
import '../../css/h/hf6uh1bsv.css';
import '../../css/t/twngjbc_y.css';
import '../../css/y/yj4siib6a.css';
import '../../css/c/czh-er49n.css';
import '../../css/r/r38it2h0q.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="q88x_bcrz"/><circle class="hf6uh1bsv"/><path class="twngjbc_y"/><circle class="yj4siib6a"/><circle class="czh-er49n"/><path class="r38it2h0q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:parenting-book"} {...others} />);
}

export default Component;
