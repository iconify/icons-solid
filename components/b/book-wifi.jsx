import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v5i7rfbbf.css';
import '../../css/l/ls62l0b2z.css';
import '../../css/q/qo2yf7i4i.css';
import '../../css/n/nzaemzbdu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="v5i7rfbbf"/><path class="ls62l0b2z"/><path class="qo2yf7i4i"/><path class="nzaemzbdu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:book-wifi"} {...others} />);
}

export default Component;
