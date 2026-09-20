import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zmd9tro5y.css';
import '../../css/x/xvka29bcn.css';
import '../../css/z/zf_ua80du.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="zmd9tro5y"/><path class="xvka29bcn"/><path clip-rule="evenodd" class="zf_ua80du"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:logout3-duotone"} {...others} />);
}

export default Component;
