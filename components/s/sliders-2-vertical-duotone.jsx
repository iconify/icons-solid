import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fgyarr_hl.css';
import '../../css/j/j64wejbxo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="fgyarr_hl"/><path class="j64wejbxo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:sliders-2-vertical-duotone"} {...others} />);
}

export default Component;
