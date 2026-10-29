import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n_sg2v3ed.css';
import '../../css/h/hc192grgd.css';
import '../../css/d/d3o_-wmae.css';
import '../../css/j/jfytd4b0q.css';
import '../../css/o/o9kddcbaq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="n_sg2v3ed wm-k"/><path class="hc192grgd wm-k"/><path class="d3o_-wmae wm-k"/><path class="jfytd4b0q wm-shine"/><path class="o9kddcbaq wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:basketball"} {...others} />);
}

export default Component;
