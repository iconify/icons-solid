import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n_sg2v3ed.css';
import '../../css/k/ke988s6ju.css';
import '../../css/c/cj-tp6byg.css';
import '../../css/j/jfytd4b0q.css';
import '../../css/c/cxr1s4b7f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="n_sg2v3ed wm-k"/><path class="ke988s6ju wm-k"/><path class="cj-tp6byg wm-k"/><path class="jfytd4b0q wm-shine"/><path class="cxr1s4b7f wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:check-circle"} {...others} />);
}

export default Component;
