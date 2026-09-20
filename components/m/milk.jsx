import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/r/rjyq_17yd.css';
import '../../css/n/n6k8vj2-r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="rjyq_17yd"/><path class="n6k8vj2-r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:milk"} {...others} />);
}

export default Component;
