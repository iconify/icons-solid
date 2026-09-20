import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/icd4vqb7g.css';
import '../../css/d/dvcjvnb9k.css';
import '../../css/p/pmsz_tb3r.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="icd4vqb7g"/><path class="dvcjvnb9k"/><path class="pmsz_tb3r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:music-note-1"} {...others} />);
}

export default Component;
