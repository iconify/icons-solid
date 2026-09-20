import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/k/kj_y7hnaq.css';
import '../../css/p/prwrzwb3e.css';
import '../../css/w/w_5trfb0g.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="kj_y7hnaq"/><path class="prwrzwb3e"/><path class="w_5trfb0g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:e-commerce-click-buy"} {...others} />);
}

export default Component;
