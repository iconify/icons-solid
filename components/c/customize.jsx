import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/o/oobb8_b6g.css';
import '../../css/n/nqog7vbel.css';
import '../../css/x/xomb33bku.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="oobb8_b6g"/><path class="nqog7vbel"/><path class="xomb33bku"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:customize"} {...others} />);
}

export default Component;
