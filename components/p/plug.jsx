import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yjnn37b9t.css';
import '../../css/b/bwx0_kboj.css';
import '../../css/d/dtqbhvbfn.css';
import '../../css/g/gqoa505pb.css';
import '../../css/r/rsms5ibyw.css';
import '../../css/f/f737q9lxr.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="yjnn37b9t"/><path class="bwx0_kboj"/><path class="dtqbhvbfn"/><path class="gqoa505pb"/><path class="rsms5ibyw"/><path class="f737q9lxr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:plug"} {...others} />);
}

export default Component;
