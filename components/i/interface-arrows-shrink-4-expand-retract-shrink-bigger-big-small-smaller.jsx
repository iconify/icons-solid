import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/x/x5u7uu_tp.css';
import '../../css/s/sg7e2zvub.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><rect transform="rotate(180 8.5 5.5)" class="x5u7uu_tp"/><path class="sg7e2zvub"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-arrows-shrink-4-expand-retract-shrink-bigger-big-small-smaller"} {...others} />);
}

export default Component;
