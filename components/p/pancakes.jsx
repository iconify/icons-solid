import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/oam4c9b6p.css';
import '../../css/f/fbtwq75re.css';
import '../../css/l/ljx59svtb.css';
import '../../css/e/eycrgk_nk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="oam4c9b6p"/><path class="fbtwq75re"/><path class="ljx59svtb"/><path class="eycrgk_nk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:pancakes"} {...others} />);
}

export default Component;
