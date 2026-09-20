import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/il7wpu91y.css';
import '../../css/m/mh3pkcc1w.css';
import '../../css/i/i5_6ytbao.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path class="il7wpu91y"/><path clip-rule="evenodd" class="mh3pkcc1w"/><path class="i5_6ytbao"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:smartphone-home-button-off"} {...others} />);
}

export default Component;
