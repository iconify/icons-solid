import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/z/zai46_5_k.css';
import '../../css/w/w2zwy2xpv.css';
import '../../css/i/ic0mqdbzm.css';
import '../../css/v/v0nuqkbfc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="zai46_5_k"/><path class="w2zwy2xpv"/><path class="ic0mqdbzm"/><path class="v0nuqkbfc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:school-bus-side"} {...others} />);
}

export default Component;
