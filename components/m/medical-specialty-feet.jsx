import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j2i--3bkl.css';
import '../../css/b/bgkzp94ig.css';
import '../../css/p/phtgp2byk.css';
import '../../css/w/w_50c_b_t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="j2i--3bkl"/><path class="bgkzp94ig"/><path class="phtgp2byk"/><path class="w_50c_b_t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:medical-specialty-feet"} {...others} />);
}

export default Component;
