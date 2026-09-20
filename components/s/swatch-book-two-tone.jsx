import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gb_5tcb-k.css';
import '../../css/x/xb2p7rnuf.css';
import '../../css/e/em8goyshd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="gb_5tcb-k"/><path class="xb2p7rnuf"/><path class="em8goyshd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:swatch-book-two-tone"} {...others} />);
}

export default Component;
