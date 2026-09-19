import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z0evmke9w.css';
import '../../css/z/zgr3sybgc.css';
import '../../css/s/s9djyg5qq.css';
import '../../css/a/atbxxcbwg.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="z0evmke9w"/><path class="zgr3sybgc"/><path clip-rule="evenodd" class="s9djyg5qq"/><path clip-rule="evenodd" class="atbxxcbwg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:sofa-two"} {...others} />);
}

export default Component;
