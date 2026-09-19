import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kyn9vhb5z.css';
import '../../css/t/t7g8bwb9l.css';
import '../../css/q/qb8-53b9l.css';
import '../../css/a/asqm2nmfa.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><circle class="kyn9vhb5z"/><g class="t7g8bwb9l"><path class="qb8-53b9l"/><path class="asqm2nmfa"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:eon"} {...others} />);
}

export default Component;
