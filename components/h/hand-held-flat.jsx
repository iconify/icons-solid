import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/t/tm7izd6wa.css';
import '../../css/j/jx1nbccqi.css';
import '../../css/y/ysuuyabkl.css';

const viewBox = {"width":48,"height":48};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="tm7izd6wa"/><path class="jx1nbccqi"/><path class="ysuuyabkl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:hand-held-flat"} {...others} />);
}

export default Component;
