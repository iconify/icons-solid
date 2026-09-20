import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/j/jce9lkb-k.css';
import '../../css/n/no9_w2bfc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="jce9lkb-k"/><path class="no9_w2bfc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:leaf"} {...others} />);
}

export default Component;
