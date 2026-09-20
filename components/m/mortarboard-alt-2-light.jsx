import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/j/jpxfn_5zf.css';
import '../../css/u/ubslkqxwm.css';
import '../../css/w/wmfhzdb5y.css';
import '../../css/r/r8i43gbkv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="jpxfn_5zf"/><path class="ubslkqxwm"/><path class="wmfhzdb5y"/><path class="r8i43gbkv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:mortarboard-alt-2-light"} {...others} />);
}

export default Component;
