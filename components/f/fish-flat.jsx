import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hj8s4cc_v.css';
import '../../css/b/bchj5u3vv.css';
import '../../css/y/y3gb2lb4j.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="hj8s4cc_v"/><path clip-rule="evenodd" class="bchj5u3vv"/><path class="y3gb2lb4j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:fish-flat"} {...others} />);
}

export default Component;
