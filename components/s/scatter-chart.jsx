import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s4xw7764u.css';
import '../../css/u/uk7qgtbdq.css';
import '../../css/i/ig2_59b5g.css';
import '../../css/j/j_kppeg2r.css';
import '../../css/l/lcjx7jb9k.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s4xw7764u"/><circle class="uk7qgtbdq"/><circle class="ig2_59b5g"/><circle class="j_kppeg2r"/><circle class="lcjx7jb9k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:scatter-chart"} {...others} />);
}

export default Component;
