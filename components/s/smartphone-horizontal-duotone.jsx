import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/wer251ban.css';
import '../../css/u/uuiu-obsd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="wer251ban"/><path class="uuiu-obsd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:smartphone-horizontal-duotone"} {...others} />);
}

export default Component;
