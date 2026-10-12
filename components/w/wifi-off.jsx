import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/d/dnd9hybje.css';
import '../../css/x/xwm1vhbzg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="dnd9hybje"/><path class="xwm1vhbzg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:wifi-off"} {...others} />);
}

export default Component;
