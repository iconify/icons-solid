import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/l/lx26nzbvq.css';
import '../../css/a/aua0i6bem.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="lx26nzbvq"/><path class="aua0i6bem"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:chat-cancel-01"} {...others} />);
}

export default Component;
