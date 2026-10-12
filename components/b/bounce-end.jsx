import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hvvgdnsdh.css';
import '../../css/p/ptytt2lzr.css';
import '../../css/i/i00e0bcjs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><circle class="hvvgdnsdh"/><path class="ptytt2lzr"/><circle class="i00e0bcjs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:bounce-end"} {...others} />);
}

export default Component;
