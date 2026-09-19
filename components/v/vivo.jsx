import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/s/si8wr-b1d.css';
import '../../css/e/e4qzanbgf.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="si8wr-b1d"/><path class="e4qzanbgf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:vivo"} {...others} />);
}

export default Component;
