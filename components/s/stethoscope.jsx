import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/isucn5_rp.css';
import '../../css/y/ye_2xub1a.css';
import '../../css/b/bxmbxnbtj.css';
import '../../css/p/pd6rn3b6w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="isucn5_rp"/><path class="ye_2xub1a"/><path class="bxmbxnbtj"/><path class="pd6rn3b6w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:stethoscope"} {...others} />);
}

export default Component;
