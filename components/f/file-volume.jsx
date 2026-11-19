import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xmmtnikrr.css';
import '../../css/y/ydeolwcqh.css';
import '../../css/b/bhgf9cc-m.css';
import '../../css/a/anmwjcbuy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="xmmtnikrr"/><path class="ydeolwcqh"/><path class="bhgf9cc-m"/><path class="anmwjcbuy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:file-volume"} {...others} />);
}

export default Component;
