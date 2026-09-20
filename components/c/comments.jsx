import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/kr2za3l6c.css';
import '../../css/d/d4qr9h3ep.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="kr2za3l6c"/><path class="d4qr9h3ep"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"majesticons:comments"} {...others} />);
}

export default Component;
