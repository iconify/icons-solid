import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nhunjmbeo.css';
import '../../css/i/i1ccrl85q.css';
import '../../css/t/tevkc4bxr.css';
import '../../css/t/tv-tkebki.css';
import '../../css/l/l_vjgnpph.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="nhunjmbeo"/><path class="i1ccrl85q"/><path class="tevkc4bxr"/><path class="tv-tkebki"/><path class="l_vjgnpph"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:sticker"} {...others} />);
}

export default Component;
