import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zkjsnojvf.css';
import '../../css/h/hrl1fmafq.css';
import '../../css/c/c4s-zobzt.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="zkjsnojvf"/><path class="hrl1fmafq"/><circle class="c4s-zobzt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ooui:logo-wikiquote"} {...others} />);
}

export default Component;
