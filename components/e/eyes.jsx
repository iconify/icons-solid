import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/b/bssk72b0m.css';
import '../../css/r/r5u72ug_r.css';
import '../../css/o/o1i1dslrl.css';
import '../../css/q/q-37s9qkg.css';
import '../../css/f/fdb0c7n_b.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="s9cl3zbei"><path clip-rule="evenodd" class="bssk72b0m"/><path class="r5u72ug_r"/><path class="o1i1dslrl"/><path class="q-37s9qkg"/><path class="fdb0c7n_b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:eyes"} {...others} />);
}

export default Component;
