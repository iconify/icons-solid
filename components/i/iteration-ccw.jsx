import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/g8z5tr6vl.css';
import '../../css/c/c4pmn2eue.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="g8z5tr6vl"/><path class="c4pmn2eue"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:iteration-ccw"} {...others} />);
}

export default Component;
