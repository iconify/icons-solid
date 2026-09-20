import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/peso-2bmk.css';
import '../../css/y/yw94irbwu.css';
import '../../css/l/lm12yezwt.css';
import '../../css/k/ka_s_fbtx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="peso-2bmk"/><path class="yw94irbwu"/><path class="lm12yezwt"/><path class="ka_s_fbtx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:reply-all"} {...others} />);
}

export default Component;
