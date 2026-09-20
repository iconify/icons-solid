import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qkqlybmds.css';
import '../../css/a/a2wt9tb9c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="qkqlybmds"/><path class="a2wt9tb9c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:gallery-horizontal-end-duotone"} {...others} />);
}

export default Component;
