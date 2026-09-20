import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/cpha-lbty.css';
import '../../css/m/mm4-ccc-d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="cpha-lbty"/><path class="mm4-ccc-d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:paint-roller-fill"} {...others} />);
}

export default Component;
