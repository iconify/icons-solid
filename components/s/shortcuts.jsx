import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/q80vbhykh.css';
import '../../css/w/wjpqeobsz.css';
import '../../css/s/socrm3qbj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><rect class="q80vbhykh"/><path class="wjpqeobsz"/><path class="socrm3qbj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"struq:shortcuts"} {...others} />);
}

export default Component;
