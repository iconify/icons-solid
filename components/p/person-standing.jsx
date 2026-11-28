import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/k/kv858g4lj.css';
import '../../css/g/gte04cq_p.css';
import '../../css/b/b3nenspnx.css';
import '../../css/n/nqtkucbji.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="kv858g4lj"/><path class="gte04cq_p"/><path class="b3nenspnx"/><path class="nqtkucbji"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:person-standing"} {...others} />);
}

export default Component;
