import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/w/w64ay2bqp.css';
import '../../css/i/itvggqbqk.css';
import '../../css/b/bankpgbzx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="w64ay2bqp"/><path class="itvggqbqk"/><path class="bankpgbzx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:phone-call"} {...others} />);
}

export default Component;
