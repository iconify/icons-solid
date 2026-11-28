import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t1vqodsmw.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/j/johrmpb-w.css';
import '../../css/u/u9_8ejboz.css';
import '../../css/t/t1sibyunk.css';
import '../../css/h/h_djk-b1c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="secondary t1vqodsmw"/><g class="dt0cm9dhy primary"><path class="johrmpb-w"/><path class="u9_8ejboz"/><path class="t1sibyunk"/><path class="h_djk-b1c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:gauge-circle-duo"} {...others} />);
}

export default Component;
