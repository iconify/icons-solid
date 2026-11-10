import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jqfsawfmi.css';
import '../../css/z/z6kmhlb8x.css';
import '../../css/k/kpuhilb-a.css';
import '../../css/q/qs52gjbsc.css';
import '../../css/u/uu_jgn35i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="jqfsawfmi"/><circle class="z6kmhlb8x"/><path class="kpuhilb-a"/><path class="qs52gjbsc"/><path class="uu_jgn35i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:contacts"} {...others} />);
}

export default Component;
