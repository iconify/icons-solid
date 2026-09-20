import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yf6vs7ttm.css';
import '../../css/w/woyg9ybfc.css';
import '../../css/h/hul4uub1l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="yf6vs7ttm"/><path class="woyg9ybfc"/><path class="hul4uub1l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixelarticons:anchor"} {...others} />);
}

export default Component;
