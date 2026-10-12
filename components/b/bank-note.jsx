import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yv43fxbia.css';
import '../../css/s/sskw0sk9f.css';
import '../../css/x/xwmfe6b9k.css';
import '../../css/f/f4brc0bci.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect transform="matrix(0 -1 -1 0 22.31 19)" class="yv43fxbia"/><rect transform="matrix(0 -1 -1 0 22.31 19)" class="sskw0sk9f"/><path class="xwmfe6b9k"/><path class="f4brc0bci"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:bank-note"} {...others} />);
}

export default Component;
