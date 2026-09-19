import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/a/ahqpqojvr.css';
import '../../css/s/swzd_qb2i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ahqpqojvr"/><path class="swzd_qb2i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"covid:transmission-virus-touch-hand-1"} {...others} />);
}

export default Component;
