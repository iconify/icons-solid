import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/q/qou7hzbdu.css';
import '../../css/k/kq66pnvfd.css';
import '../../css/j/jxs7jcb4k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="qou7hzbdu"/><path class="kq66pnvfd"/><path class="jxs7jcb4k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:waving-hand"} {...others} />);
}

export default Component;
