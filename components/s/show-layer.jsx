import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/l/l8tg53bnq.css';
import '../../css/s/s_n-7sb1p.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="l8tg53bnq"/><path class="s_n-7sb1p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:show-layer"} {...others} />);
}

export default Component;
