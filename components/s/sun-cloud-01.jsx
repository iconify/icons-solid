import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/q/q9rms6bgf.css';
import '../../css/i/ipkgsbcsq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="q9rms6bgf"/><path class="ipkgsbcsq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:sun-cloud-01"} {...others} />);
}

export default Component;
