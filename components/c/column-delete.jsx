import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/m/mwn8sscbi.css';
import '../../css/u/ufk3re2ji.css';
import '../../css/n/n4jxhabgi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="mwn8sscbi"/><path class="ufk3re2ji"/><path class="n4jxhabgi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:column-delete"} {...others} />);
}

export default Component;
