import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/nu79aibse.css';
import '../../css/y/yjfo42_6x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="nu79aibse"/><path class="yjfo42_6x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:sunrise-duotone"} {...others} />);
}

export default Component;
