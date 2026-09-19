import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/y/ypfi6ibup.css';
import '../../css/o/ov58__wqf.css';
import '../../css/k/kh69_w8cl.css';
import '../../css/o/orua5gbtu.css';

const viewBox = {"width":48,"height":48};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="ypfi6ibup"/><path class="ov58__wqf"/><path class="kh69_w8cl"/><path class="orua5gbtu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:alcohol-outline"} {...others} />);
}

export default Component;
