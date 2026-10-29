import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/w/wzh0ixbqb.css';
import '../../css/m/mb8gb_27u.css';
import '../../css/s/s1f6ebbcx.css';
import '../../css/q/qo6cdbcym.css';
import '../../css/l/lwttxu5rl.css';
import '../../css/u/uk7ndnb4g.css';
import '../../css/i/iifqig7rj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="wm-shadow wzh0ixbqb"/><path class="mb8gb_27u"/><path class="s1f6ebbcx"/><path class="qo6cdbcym"/><path class="lwttxu5rl wm-shine"/><path class="uk7ndnb4g wm-deco"/><path class="iifqig7rj wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:square-function"} {...others} />);
}

export default Component;
