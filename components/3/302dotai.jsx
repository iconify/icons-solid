import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/c/c2dsb_-8a.css';
import '../../css/c/ccmjw11qh.css';
import '../../css/u/ucoa8jbxb.css';
import '../../css/a/alkj6e4kz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="c2dsb_-8a"/><path class="ccmjw11qh"/><path class="ucoa8jbxb"/><path clip-rule="evenodd" class="alkj6e4kz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:302dotai"} {...others} />);
}

export default Component;
