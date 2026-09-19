import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/c/ce2reykpi.css';
import '../../css/i/ipjpbhbyx.css';
import '../../css/e/e9218ck5j.css';
import '../../css/c/c0q8lebsr.css';
import '../../css/u/udq2j7b9c.css';
import '../../css/u/uwdy9gkip.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="s9cl3zbei"><path clip-rule="evenodd" class="ce2reykpi"/><path class="ipjpbhbyx"/><path class="e9218ck5j"/><path class="c0q8lebsr"/><path class="udq2j7b9c"/><path class="uwdy9gkip"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:pesticide"} {...others} />);
}

export default Component;
