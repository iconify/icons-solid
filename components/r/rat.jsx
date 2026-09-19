import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d80-uvbqo.css';
import '../../css/m/m6vazfblz.css';
import '../../css/i/i9gwb9buy.css';
import '../../css/c/c7ynm7bfe.css';
import '../../css/x/xct15nbbj.css';
import '../../css/s/spmz62mjv.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="d80-uvbqo"/><path class="m6vazfblz"/><path class="i9gwb9buy"/><path class="c7ynm7bfe"/><path class="xct15nbbj"/><path class="spmz62mjv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:rat"} {...others} />);
}

export default Component;
