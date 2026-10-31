import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/ii4fhcmmj.css';
import '../../css/m/ma0gmc9og.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="ii4fhcmmj"/><path class="ma0gmc9og"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:constipation"} {...others} />);
}

export default Component;
