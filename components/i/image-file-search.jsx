import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lb_fc-mkl.css';
import '../../css/x/xoysycb5r.css';
import '../../css/h/h5do8rb-t.css';
import '../../css/x/xnntf6bru.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="lb_fc-mkl"/><path class="xoysycb5r"/><path class="h5do8rb-t"/><path class="xnntf6bru"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:image-file-search"} {...others} />);
}

export default Component;
