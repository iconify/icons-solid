import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e8t_k5p9z.css';
import '../../css/b/btq804b6i.css';
import '../../css/h/hw499ejxi.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="e8t_k5p9z"/><path class="btq804b6i"/><path class="hw499ejxi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:note-medical-duo"} {...others} />);
}

export default Component;
