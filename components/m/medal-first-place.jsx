import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/l/l40iy_69f.css';
import '../../css/t/t9tvn7zfp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><circle class="l40iy_69f"/><path class="t9tvn7zfp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:medal-first-place"} {...others} />);
}

export default Component;
