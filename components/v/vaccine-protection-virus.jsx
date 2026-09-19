import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/b/b8xq7u-3q.css';
import '../../css/b/brtmzlb7c.css';
import '../../css/q/qd-mihk1s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="b8xq7u-3q"/><path class="brtmzlb7c"/><path class="qd-mihk1s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"covid:vaccine-protection-virus"} {...others} />);
}

export default Component;
