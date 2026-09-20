import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/i/iivd7pi3b.css';
import '../../css/f/f7d7ahljl.css';
import '../../css/b/bnak6ac7v.css';
import '../../css/e/eywv98bfn.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="iivd7pi3b"/><path class="f7d7ahljl"/><path class="bnak6ac7v"/><path class="eywv98bfn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:tag-alt"} {...others} />);
}

export default Component;
