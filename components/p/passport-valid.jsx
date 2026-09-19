import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/zfxrd8b9z.css';
import '../../css/i/i8n6q-sjq.css';
import '../../css/m/mv-txmbcc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="zfxrd8b9z"/><path class="i8n6q-sjq"/><path class="mv-txmbcc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:passport-valid"} {...others} />);
}

export default Component;
