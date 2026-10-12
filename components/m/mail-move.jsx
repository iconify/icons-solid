import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u7vjzfbgj.css';
import '../../css/w/w7p5esqwh.css';
import '../../css/r/rbge63uxc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="u7vjzfbgj"/><path class="w7p5esqwh"/><path class="rbge63uxc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:mail-move"} {...others} />);
}

export default Component;
