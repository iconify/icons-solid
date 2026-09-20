import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/ywy9jdbir.css';
import '../../css/c/c-0ybgixq.css';
import '../../css/z/zve57hbkp.css';
import '../../css/v/vhkp1kw7y.css';
import '../../css/h/hyakthbmd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="ywy9jdbir"/><path class="c-0ybgixq"/><path class="zve57hbkp"/><path class="vhkp1kw7y"/><path class="hyakthbmd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:planet-3-bold"} {...others} />);
}

export default Component;
