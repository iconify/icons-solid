import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/w/wei_cibse.css';
import '../../css/b/b3o1m5bbn.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="n1lsf0bnc"><path class="wei_cibse"/><path class="b3o1m5bbn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency:rdd"} {...others} />);
}

export default Component;
