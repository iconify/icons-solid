import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b0y23_1nc.css';
import '../../css/f/ff3sy810t.css';
import '../../css/r/rvy91nq9z.css';
import '../../css/p/pbmit9bro.css';
import '../../css/b/bnddd8spr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="b0y23_1nc"/><path class="ff3sy810t"/><path class="rvy91nq9z"/><path class="pbmit9bro"/><path class="bnddd8spr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:volleyball-ball"} {...others} />);
}

export default Component;
