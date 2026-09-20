import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/liv05r6py.css';
import '../../css/t/tbb030bka.css';
import '../../css/b/b07kv0vxw.css';
import '../../css/b/bnz_f9bfn.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="liv05r6py"/><path class="tbb030bka"/><path class="b07kv0vxw"/><path class="bnz_f9bfn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:desktop-check"} {...others} />);
}

export default Component;
