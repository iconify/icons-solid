import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qg47f8bmh.css';
import '../../css/m/mq9rm43yz.css';
import '../../css/t/tdifqf3xh.css';
import '../../css/h/hy5wr0lch.css';
import '../../css/y/ydno77b4f.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="qg47f8bmh"/><path class="mq9rm43yz"/><path class="tdifqf3xh"/><path class="hy5wr0lch"/><path class="ydno77b4f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:luggage-cart-pop"} {...others} />);
}

export default Component;
