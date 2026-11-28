import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/ga6l3xnfc.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/h/hbytrdxoo.css';
import '../../css/e/e7jn6hbnp.css';
import '../../css/s/s16fimbnd.css';
import '../../css/j/j3q1rcclj.css';
import '../../css/x/xom3oqz_w.css';
import '../../css/l/l3sluibzn.css';
import '../../css/h/h4_j_tb2s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ga6l3xnfc secondary"/><g class="dt0cm9dhy primary"><path class="hbytrdxoo"/><path class="e7jn6hbnp"/><path class="s16fimbnd"/><path class="j3q1rcclj"/><path class="xom3oqz_w"/><path class="l3sluibzn"/><path class="h4_j_tb2s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:ai-translate-duo"} {...others} />);
}

export default Component;
