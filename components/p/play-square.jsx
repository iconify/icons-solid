import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vg3uuzbke.css';
import '../../css/z/zp8fjxjrj.css';
import '../../css/e/e4htm8bbn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="vg3uuzbke"/><rect transform="matrix(0 -1 -1 0 21.4 21.4)" class="zp8fjxjrj"/><path class="e4htm8bbn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:play-square"} {...others} />);
}

export default Component;
