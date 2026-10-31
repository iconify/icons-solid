import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m3575dbqw.css';
import '../../css/u/ubcfiubyr.css';
import '../../css/n/ntakfoc9q.css';

const viewBox = {"width":301,"height":227};
const content = `<g class="ft5dv1b6b"><path class="m3575dbqw"/><path class="ubcfiubyr"/><path class="ntakfoc9q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:dk"} {...others} />);
}

export default Component;
