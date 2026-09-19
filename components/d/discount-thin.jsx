import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/d/d1jqbybzv.css';
import '../../css/q/qrkawlnfo.css';
import '../../css/y/ylt9lr2-y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="d1jqbybzv"/><path class="qrkawlnfo"/><path class="ylt9lr2-y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:discount-thin"} {...others} />);
}

export default Component;
