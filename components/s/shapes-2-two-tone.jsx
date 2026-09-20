import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zpr5x_-lm.css';
import '../../css/o/o0my61btq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="zpr5x_-lm"/><path class="o0my61btq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:shapes-2-two-tone"} {...others} />);
}

export default Component;
