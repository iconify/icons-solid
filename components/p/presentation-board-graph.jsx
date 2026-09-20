import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mgyuz2oym.css';
import '../../css/z/z7seoxqig.css';
import '../../css/g/gp8hu3blm.css';
import '../../css/y/yibdh2wpn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="mgyuz2oym"/><path class="z7seoxqig"/><path class="gp8hu3blm"/><path class="yibdh2wpn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:presentation-board-graph"} {...others} />);
}

export default Component;
