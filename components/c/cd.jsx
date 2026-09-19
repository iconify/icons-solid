import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bs8xkbbwh.css';
import '../../css/b/b5eoc9f6b.css';
import '../../css/f/fh0rozb0g.css';

const viewBox = {"width":301,"height":225};
const content = `<g class="ft5dv1b6b"><path class="bs8xkbbwh"/><path class="b5eoc9f6b"/><path class="fh0rozb0g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:cd"} {...others} />);
}

export default Component;
