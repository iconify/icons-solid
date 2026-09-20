import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vub_5oz5o.css';
import '../../css/p/plqniubol.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="vub_5oz5o"/><path class="plqniubol"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:mail-x-duotone"} {...others} />);
}

export default Component;
