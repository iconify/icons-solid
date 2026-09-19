import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wqwf-7vsq.css';
import '../../css/h/h2a6rrzea.css';
import '../../css/p/poumkgmqu.css';
import '../../css/b/b6zn_7b0w.css';
import '../../css/f/f6a7v1_xc.css';
import '../../css/f/f4vh8tbrd.css';

const viewBox = {"width":32,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="wqwf-7vsq"/><path clip-rule="evenodd" class="h2a6rrzea"/><path clip-rule="evenodd" class="poumkgmqu"/><path class="b6zn_7b0w"/><path clip-rule="evenodd" class="f6a7v1_xc"/><path clip-rule="evenodd" class="f4vh8tbrd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flagpack:ss"} {...others} />);
}

export default Component;
