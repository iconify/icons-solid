import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/w/wsalesqno.css';
import '../../css/f/f_5wg0bxj.css';
import '../../css/a/araeuyb9p.css';
import '../../css/z/zci-1fbna.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="wsalesqno"/><path class="f_5wg0bxj wm-a"/><path class="araeuyb9p"/><path class="wm-a zci-1fbna"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:trash-2-duo"} {...others} />);
}

export default Component;
