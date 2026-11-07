import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/n/nomdrxbld.css';
import '../../css/z/z8j9m1bjy.css';
import '../../css/z/zz8f-y99b.css';
import '../../css/t/t2jvb6bpe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="nomdrxbld"/><path class="z8j9m1bjy"/><path class="zz8f-y99b"/><path class="t2jvb6bpe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:wallet-2-linear"} {...others} />);
}

export default Component;
