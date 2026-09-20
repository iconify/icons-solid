import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wf89k6buf.css';
import '../../css/t/tpjpmfbne.css';
import '../../css/s/srdlptbat.css';
import '../../css/h/h_4v6zbwh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="wf89k6buf"/><path class="tpjpmfbne"/><path class="srdlptbat"/><path class="h_4v6zbwh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:download-twice-square-bold-duotone"} {...others} />);
}

export default Component;
