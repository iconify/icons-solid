import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g8iq1nhqs.css';
import '../../css/u/upas56-sd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="g8iq1nhqs"/><path class="upas56-sd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxs-edit"} {...others} />);
}

export default Component;
