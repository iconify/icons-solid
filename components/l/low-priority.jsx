import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/si1zmcbxh.css';
import '../../css/f/fvtlxtbin.css';
import '../../css/o/o16hhbcdh.css';
import '../../css/a/akuniccwg.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="si1zmcbxh"/><g class="fvtlxtbin"><path class="o16hhbcdh"/><path class="akuniccwg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:low-priority"} {...others} />);
}

export default Component;
