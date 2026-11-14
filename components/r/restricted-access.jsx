import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/p/p8gqlabhm.css';
import '../../css/h/hb8k3n1zg.css';
import '../../css/t/t67fgabgo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><rect class="p8gqlabhm"/><path class="hb8k3n1zg"/><path class="t67fgabgo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"evicons:restricted-access"} {...others} />);
}

export default Component;
