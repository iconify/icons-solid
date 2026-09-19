import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jy6h_0b2p.css';
import '../../css/p/pxt_n4blf.css';
import '../../css/g/gvdnjb06q.css';
import '../../css/g/gom_ytb7u.css';
import '../../css/u/ugmbjb0go.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="jy6h_0b2p"/><path class="pxt_n4blf"/><path class="gvdnjb06q"/><path class="gom_ytb7u"/><path class="ugmbjb0go"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:front-facing-baby-chick"} {...others} />);
}

export default Component;
