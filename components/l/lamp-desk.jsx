import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n1ofoyb7f.css';
import '../../css/b/b_wkbkxcw.css';
import '../../css/x/xptg4acky.css';
import '../../css/u/uvkt82bzy.css';
import '../../css/i/ioy27tbun.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="n1ofoyb7f"/><circle transform="rotate(90 5 13.9)" class="b_wkbkxcw"/><path class="xptg4acky"/><circle transform="rotate(90 5 13.9)" class="uvkt82bzy"/><path class="ioy27tbun"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:lamp-desk"} {...others} />);
}

export default Component;
