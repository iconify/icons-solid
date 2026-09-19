import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/s/sfubw46ew.css';
import '../../css/x/xl7_gdfrs.css';
import '../../css/i/iljijccvp.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="h01tyzbfu"><path class="sfubw46ew"/><path class="xl7_gdfrs"/><circle transform="rotate(-45 6.95 7.38)" class="iljijccvp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:label-print"} {...others} />);
}

export default Component;
