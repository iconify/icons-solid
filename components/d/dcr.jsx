import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/a/axm1x5_0j.css';
import '../../css/r/rz8dbzb9l.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="axm1x5_0j"/><path class="rz8dbzb9l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:dcr"} {...others} />);
}

export default Component;
