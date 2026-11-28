import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/p/p8zug3oqg.css';
import '../../css/p/p-hb2dbpu.css';
import '../../css/z/zl93bsbqp.css';
import '../../css/k/krynnrlat.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="p8zug3oqg"/><path class="p-hb2dbpu"/><path class="zl93bsbqp"/><path class="krynnrlat"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:vials"} {...others} />);
}

export default Component;
