import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hzudws-br.css';
import '../../css/n/nnhz2fbfy.css';
import '../../css/f/f26-q2vvv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hzudws-br wm-shadow"/><path class="nnhz2fbfy wm-k"/><path class="f26-q2vvv wm-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:rotate-ccw"} {...others} />);
}

export default Component;
