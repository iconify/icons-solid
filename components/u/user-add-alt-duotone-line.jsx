import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/unc2embyj.css';
import '../../css/x/x8o5_8bro.css';
import '../../css/s/spr08kbuw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="unc2embyj"><circle class="x8o5_8bro"/><path class="spr08kbuw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:user-add-alt-duotone-line"} {...others} />);
}

export default Component;
