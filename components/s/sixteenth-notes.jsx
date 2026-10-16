import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hdgv94bgu.css';
import '../../css/d/dqapyabwu.css';
import '../../css/t/tke4h5b0x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="hdgv94bgu"/><circle class="dqapyabwu"/><circle class="tke4h5b0x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:sixteenth-notes"} {...others} />);
}

export default Component;
