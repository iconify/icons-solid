import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/owzc3mqvp.css';
import '../../css/v/vlma91bmo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="owzc3mqvp"/><path class="vlma91bmo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:fuel-duocolor-round"} {...others} />);
}

export default Component;
