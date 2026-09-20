import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/w/wpc9fjb6p.css';
import '../../css/e/efk5_tbwo.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="wpc9fjb6p"/><path class="efk5_tbwo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:handphone-laptop"} {...others} />);
}

export default Component;
