import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l1pxunpbj.css';
import '../../css/g/girf9zbcy.css';
import '../../css/p/p74anlbhw.css';
import '../../css/u/uob6ktbab.css';
import '../../css/z/z2955k29e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="l1pxunpbj"/><path class="girf9zbcy"/><path class="p74anlbhw"/><rect class="uob6ktbab"/><path class="z2955k29e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:mail-lock"} {...others} />);
}

export default Component;
