import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/yywrz0ino.css';
import '../../css/i/insy35blj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="yywrz0ino"/><path class="insy35blj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:headset-2-fill"} {...others} />);
}

export default Component;
