import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pr52f_b5y.css';
import '../../css/y/yujhm0l1u.css';
import '../../css/z/zs_iofb5o.css';
import '../../css/u/uz9ll1pqo.css';
import '../../css/n/nbyuuco7n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="pr52f_b5y"><circle class="yujhm0l1u"/><path class="zs_iofb5o"/><circle class="uz9ll1pqo"/><circle class="nbyuuco7n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:sad"} {...others} />);
}

export default Component;
