import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/o/odh0ceb1l.css';
import '../../css/a/aet4-uozc.css';
import '../../css/z/zbcx4z0sd.css';
import '../../css/b/b07r3_5ni.css';
import '../../css/e/eao2zh1lx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="odh0ceb1l wm-shadow"/><path class="aet4-uozc wm-shadow"/><path class="zbcx4z0sd"/><path class="b07r3_5ni"/><path class="eao2zh1lx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:graduation-cap"} {...others} />);
}

export default Component;
