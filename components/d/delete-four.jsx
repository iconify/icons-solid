import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/o/obvh9vbmm.css';
import '../../css/j/jtj6nabty.css';
import '../../css/t/t7urb3kso.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><path class="obvh9vbmm"/><path class="jtj6nabty"/><path class="t7urb3kso"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:delete-four"} {...others} />);
}

export default Component;
