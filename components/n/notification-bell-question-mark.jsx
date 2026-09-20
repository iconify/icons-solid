import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/bvgtbqbgc.css';
import '../../css/z/zloqlfbao.css';
import '../../css/r/r7bywrkfh.css';
import '../../css/t/tihfs1bkz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="bvgtbqbgc"/><path class="zloqlfbao"/><path class="r7bywrkfh"/><path class="tihfs1bkz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:notification-bell-question-mark"} {...others} />);
}

export default Component;
