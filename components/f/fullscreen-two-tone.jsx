import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zq7x653mj.css';
import '../../css/z/z14q86kcr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="zq7x653mj"/><path class="z14q86kcr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:fullscreen-two-tone"} {...others} />);
}

export default Component;
