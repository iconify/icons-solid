import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/a/aigr9vb-k.css';
import '../../css/m/mer_ybfqj.css';
import '../../css/v/va9mwjbzo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="aigr9vb-k"/><path class="mer_ybfqj"/><path class="va9mwjbzo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:dholak"} {...others} />);
}

export default Component;
