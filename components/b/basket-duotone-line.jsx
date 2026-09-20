import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/unc2embyj.css';
import '../../css/d/dr0ul_4qw.css';
import '../../css/j/jdgi2gcts.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="unc2embyj"><path class="dr0ul_4qw"/><path class="jdgi2gcts"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:basket-duotone-line"} {...others} />);
}

export default Component;
