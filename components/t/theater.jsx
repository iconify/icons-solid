import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/iv5vjgbei.css';
import '../../css/v/vneka1b-n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="iv5vjgbei"/><path class="vneka1b-n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:theater"} {...others} />);
}

export default Component;
