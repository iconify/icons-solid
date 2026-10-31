import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/jobjusb4q.css';
import '../../css/h/hav6qo5jd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="jobjusb4q"/><path class="hav6qo5jd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"struq:pin"} {...others} />);
}

export default Component;
