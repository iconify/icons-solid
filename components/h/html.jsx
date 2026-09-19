import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/k/ky84xabzx.css';
import '../../css/c/c8r5gybum.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="ky84xabzx"/><path class="c8r5gybum"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:html"} {...others} />);
}

export default Component;
