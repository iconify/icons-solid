import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/r/r35i2tbxi.css';
import '../../css/q/qthgv0dij.css';
import '../../css/i/i-7vcwsvb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="r35i2tbxi"/><path class="qthgv0dij"/><path class="i-7vcwsvb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bitcoin-icons:car-outline"} {...others} />);
}

export default Component;
