import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/o5fhfcboe.css';
import '../../css/h/h6xqfzbiz.css';
import '../../css/q/q3fxoyena.css';
import '../../css/b/bm681kt0f.css';
import '../../css/t/t869bfbfu.css';
import '../../css/p/pxlcabbtj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="o5fhfcboe"/><path class="h6xqfzbiz"/><path class="q3fxoyena"/><path class="bm681kt0f"/><path class="t869bfbfu"/><path class="pxlcabbtj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:notebook-2-linear"} {...others} />);
}

export default Component;
