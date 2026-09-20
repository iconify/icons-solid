import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/jhwvs5d9z.css';
import '../../css/v/vd-1j2bcj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="jhwvs5d9z"/><path class="vd-1j2bcj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:mail-question"} {...others} />);
}

export default Component;
