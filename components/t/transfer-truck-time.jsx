import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/a/al97k0iyn.css';
import '../../css/l/l-k9wbbin.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="al97k0iyn"/><path class="l-k9wbbin"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:transfer-truck-time"} {...others} />);
}

export default Component;
