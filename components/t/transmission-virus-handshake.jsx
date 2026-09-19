import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/m/mq9irnbcc.css';
import '../../css/h/hgpkc4b0w.css';
import '../../css/k/kniikcc3w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="mq9irnbcc"/><path class="hgpkc4b0w"/><path class="kniikcc3w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"covid:transmission-virus-handshake"} {...others} />);
}

export default Component;
