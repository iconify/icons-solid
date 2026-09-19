import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/ib9yn7bdv.css';
import '../../css/x/xul744bme.css';
import '../../css/y/yawf9negy.css';
import '../../css/b/bnqo1fz8v.css';

const viewBox = {"width":12,"height":12};
const content = `<g class="cuyn6tgcc"><rect class="ib9yn7bdv"/><rect class="xul744bme"/><rect class="yawf9negy"/><rect class="bnqo1fz8v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:grid-2x2-fill-12"} {...others} />);
}

export default Component;
