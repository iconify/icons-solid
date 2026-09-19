import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/w/wfbc2vdio.css';
import '../../css/c/c9wqi7bil.css';
import '../../css/o/o86yh-b_x.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><rect class="wfbc2vdio"/><path class="c9wqi7bil"/><path class="o86yh-b_x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:voice"} {...others} />);
}

export default Component;
