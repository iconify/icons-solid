import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/zcahlbb8m.css';
import '../../css/x/x1bbvpbuw.css';
import '../../css/a/a-9na3bne.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="zcahlbb8m"/><path class="x1bbvpbuw"/><path class="a-9na3bne"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:sine-01"} {...others} />);
}

export default Component;
