import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/womm7ibbq.css';
import '../../css/c/cfd7w6bpf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="womm7ibbq"/><path class="cfd7w6bpf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:bell-dot-fill"} {...others} />);
}

export default Component;
