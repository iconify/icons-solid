import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/un6g0p8cw.css';
import '../../css/f/fjtiwkodd.css';
import '../../css/x/x_rm9u1ba.css';
import '../../css/a/art9oydhg.css';
import '../../css/d/dt5qoccsj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="un6g0p8cw"/><path class="fjtiwkodd"/><path class="x_rm9u1ba"/><path class="art9oydhg wm-a"/><path class="dt5qoccsj wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:gold-ingot"} {...others} />);
}

export default Component;
