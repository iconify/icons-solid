import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/phtfdhtmq.css';
import '../../css/f/faok_j0wk.css';
import '../../css/m/mzft2nbcf.css';
import '../../css/f/fgs7pob4p.css';
import '../../css/o/o72zjz46d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="phtfdhtmq"/><path class="faok_j0wk"/><path class="mzft2nbcf"/><path class="fgs7pob4p"/><path class="o72zjz46d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:book-album-picture"} {...others} />);
}

export default Component;
