import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/vea8iybjt.css';
import '../../css/k/ki00rvofo.css';
import '../../css/v/v4sczhx0t.css';
import '../../css/z/zoz248zcv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="vea8iybjt"/><path class="ki00rvofo"/><path class="v4sczhx0t"/><path class="zoz248zcv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:microphone-large-line-duotone"} {...others} />);
}

export default Component;
