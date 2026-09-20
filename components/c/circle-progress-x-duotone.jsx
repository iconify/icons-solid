import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/wjk7vbbyo.css';
import '../../css/q/q3udt0b0k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="wjk7vbbyo"/><path class="q3udt0b0k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:circle-progress-x-duotone"} {...others} />);
}

export default Component;
