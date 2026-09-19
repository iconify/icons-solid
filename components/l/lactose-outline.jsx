import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yili_cwtj.css';
import '../../css/i/im8__db2r.css';
import '../../css/j/j6489r_4a.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="yili_cwtj"/><path clip-rule="evenodd" class="im8__db2r"/><path class="j6489r_4a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:lactose-outline"} {...others} />);
}

export default Component;
