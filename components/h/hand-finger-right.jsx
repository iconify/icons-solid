import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hqv1bnikt.css';
import '../../css/w/w-xahwbwn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="hqv1bnikt"/><path class="w-xahwbwn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:hand-finger-right"} {...others} />);
}

export default Component;
