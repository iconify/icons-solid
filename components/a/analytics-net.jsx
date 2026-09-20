import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/c/c6hsm33uq.css';
import '../../css/h/hladwcboz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="c6hsm33uq"/><path class="hladwcboz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:analytics-net"} {...others} />);
}

export default Component;
