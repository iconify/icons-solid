import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/m/mxk6w_5dk.css';
import '../../css/p/pxnlt0biz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="mxk6w_5dk"/><path class="pxnlt0biz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:mouse4"} {...others} />);
}

export default Component;
