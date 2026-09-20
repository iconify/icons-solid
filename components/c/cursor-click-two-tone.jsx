import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/c-76a5tbt.css';
import '../../css/m/mgrhl1bss.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="c-76a5tbt"/><path class="mgrhl1bss"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:cursor-click-two-tone"} {...others} />);
}

export default Component;
