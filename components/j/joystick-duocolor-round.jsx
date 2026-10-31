import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/jb3ap4bhw.css';
import '../../css/o/o0h_-bcbt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="jb3ap4bhw"/><path class="o0h_-bcbt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:joystick-duocolor-round"} {...others} />);
}

export default Component;
