import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/d/dbgvcxwad.css';
import '../../css/y/yv6ztqbwg.css';
import '../../css/s/s33upcjls.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><circle class="dbgvcxwad"/><path class="yv6ztqbwg"/><path class="s33upcjls"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:basketball"} {...others} />);
}

export default Component;
