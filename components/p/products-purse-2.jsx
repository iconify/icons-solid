import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/y/yrzokps8z.css';
import '../../css/g/g27cq0bky.css';
import '../../css/k/k2n8rtbhj.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="yrzokps8z"/><path class="g27cq0bky"/><path class="k2n8rtbhj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:products-purse-2"} {...others} />);
}

export default Component;
