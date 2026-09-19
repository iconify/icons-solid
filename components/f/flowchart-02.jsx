import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/m/m3mjhjsib.css';
import '../../css/u/uw7kh3tvy.css';
import '../../css/z/z70us2r6z.css';
import '../../css/t/td_xgwz2t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="m3mjhjsib"/><path class="uw7kh3tvy"/><path class="z70us2r6z"/><path class="td_xgwz2t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:flowchart-02"} {...others} />);
}

export default Component;
