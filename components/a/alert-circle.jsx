import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n_sg2v3ed.css';
import '../../css/m/mgh33dbtm.css';
import '../../css/c/cj-tp6byg.css';
import '../../css/j/jfytd4b0q.css';
import '../../css/v/vlrtexz9o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="n_sg2v3ed wm-k"/><path class="mgh33dbtm wm-k"/><path class="cj-tp6byg wm-k"/><path class="jfytd4b0q wm-shine"/><path class="vlrtexz9o wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:alert-circle"} {...others} />);
}

export default Component;
