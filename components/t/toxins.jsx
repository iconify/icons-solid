import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/b/b1t7nftqh.css';
import '../../css/x/xn7_fzb3m.css';
import '../../css/o/old3i1bqh.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path clip-rule="evenodd" class="b1t7nftqh"/><path class="xn7_fzb3m"/><path class="old3i1bqh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:toxins"} {...others} />);
}

export default Component;
