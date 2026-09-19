import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/v_78o9bzj.css';
import '../../css/r/rf89yab9s.css';
import '../../css/j/jzyc6ac6r.css';
import '../../css/w/wqfwsubtj.css';
import '../../css/o/o163b2bww.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="v_78o9bzj"/><path class="rf89yab9s"/><path clip-rule="evenodd" class="jzyc6ac6r"/><path class="wqfwsubtj"/><path clip-rule="evenodd" class="o163b2bww"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:human-resoruces2x-outline"} {...others} />);
}

export default Component;
