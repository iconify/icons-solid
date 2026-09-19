import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/tqtr5kbxv.css';
import '../../css/d/d90u91b9f.css';
import '../../css/k/k0vdysbtw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="tqtr5kbxv"/><path class="d90u91b9f"/><path class="k0vdysbtw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:prayer-rug-01"} {...others} />);
}

export default Component;
