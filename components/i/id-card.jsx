import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/u/u4lm23blg.css';
import '../../css/y/ycpyxh1kl.css';
import '../../css/k/kxs16xb2x.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="u4lm23blg"/><path class="ycpyxh1kl"/><path class="kxs16xb2x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:id-card"} {...others} />);
}

export default Component;
