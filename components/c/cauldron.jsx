import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xtfu_dzll.css';
import '../../css/h/hzhp86xkr.css';
import '../../css/o/ou_-b_bfs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><circle class="xtfu_dzll"/><circle class="hzhp86xkr"/><path class="ou_-b_bfs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:cauldron"} {...others} />);
}

export default Component;
