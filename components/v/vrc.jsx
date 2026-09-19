import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/d/dpnqboxwv.css';
import '../../css/k/kl7o6wf0m.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="dpnqboxwv"/><path class="kl7o6wf0m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:vrc"} {...others} />);
}

export default Component;
