import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/t4s9m1b2j.css';
import '../../css/i/i5pb2cb6i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="t4s9m1b2j"/><circle class="i5pb2cb6i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:metronome"} {...others} />);
}

export default Component;
