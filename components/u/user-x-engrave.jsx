import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/d/djiqt-b-p.css';
import '../../css/k/kv-kaou7x.css';
import '../../css/p/prty8wg5d.css';
import '../../css/e/emha3wbqe.css';
import '../../css/p/p65k-7b9s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="djiqt-b-p wm-k"/><path class="kv-kaou7x wm-s"/><path class="prty8wg5d wm-shadow"/><path class="emha3wbqe wm-k"/><path class="p65k-7b9s wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:user-x-engrave"} {...others} />);
}

export default Component;
