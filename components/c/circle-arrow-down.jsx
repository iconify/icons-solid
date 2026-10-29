import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n_sg2v3ed.css';
import '../../css/j/jjy8trk4k.css';
import '../../css/z/z2oo-7b-p.css';
import '../../css/j/jfytd4b0q.css';
import '../../css/z/zlawzni-r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="n_sg2v3ed wm-k"/><path class="jjy8trk4k wm-k"/><path class="wm-k z2oo-7b-p"/><path class="jfytd4b0q wm-shine"/><path class="wm-k zlawzni-r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:circle-arrow-down"} {...others} />);
}

export default Component;
