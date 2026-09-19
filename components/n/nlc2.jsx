import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/a/axmxw95ml.css';
import '../../css/w/wpy3it29h.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="axmxw95ml"/><path class="wpy3it29h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:nlc2"} {...others} />);
}

export default Component;
