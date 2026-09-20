import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/t5n9-dbow.css';
import '../../css/c/cpha-lbty.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="t5n9-dbow"/><path class="cpha-lbty"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:paint-roller-duotone"} {...others} />);
}

export default Component;
