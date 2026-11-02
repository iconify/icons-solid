import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g6o_i0g4x.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="g6o_i0g4x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:stethoscope-fill"} {...others} />);
}

export default Component;
