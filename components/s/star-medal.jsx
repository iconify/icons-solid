import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/f/f9sm5sb1s.css';
import '../../css/a/at5jq4jfg.css';
import '../../css/t/t_be4jbjc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="f9sm5sb1s"/><path class="at5jq4jfg"/><path class="t_be4jbjc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:star-medal"} {...others} />);
}

export default Component;
