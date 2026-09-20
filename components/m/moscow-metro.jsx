import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hf8t2ubeu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hf8t2ubeu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:moscow-metro"} {...others} />);
}

export default Component;
