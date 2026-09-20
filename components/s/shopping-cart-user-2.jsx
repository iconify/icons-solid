import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/ssczkxbhe.css';
import '../../css/t/t3pvg7bbb.css';
import '../../css/e/e4f8pl63i.css';
import '../../css/n/nynv01bec.css';
import '../../css/l/ljib0ebde.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ssczkxbhe"/><path class="t3pvg7bbb"/><path class="e4f8pl63i"/><path class="nynv01bec"/><path class="ljib0ebde"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:shopping-cart-user-2"} {...others} />);
}

export default Component;
