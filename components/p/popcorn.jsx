import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/x/xsnu5obcl.css';
import '../../css/t/tzgk9_bkk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="xsnu5obcl"/><path class="tzgk9_bkk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:popcorn"} {...others} />);
}

export default Component;
