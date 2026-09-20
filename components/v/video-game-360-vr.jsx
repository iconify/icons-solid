import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/f/fey1rubmg.css';
import '../../css/k/kgcxlh52x.css';
import '../../css/m/mo3nibcdd.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="fey1rubmg"/><path class="kgcxlh52x"/><path class="mo3nibcdd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:video-game-360-vr"} {...others} />);
}

export default Component;
