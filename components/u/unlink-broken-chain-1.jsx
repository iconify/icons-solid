import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/t/thgoyylzb.css';
import '../../css/y/y1bgarbnk.css';
import '../../css/s/sngcg6bqy.css';
import '../../css/t/t9nb_q56o.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="thgoyylzb"/><path class="y1bgarbnk"/><path class="sngcg6bqy"/><path class="t9nb_q56o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:unlink-broken-chain-1"} {...others} />);
}

export default Component;
