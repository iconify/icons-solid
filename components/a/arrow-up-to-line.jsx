import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/urex7lgqu.css';
import '../../css/c/cad4hcf2h.css';
import '../../css/f/fwvwu22pc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="urex7lgqu"/><path class="cad4hcf2h"/><path class="fwvwu22pc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:arrow-up-to-line"} {...others} />);
}

export default Component;
