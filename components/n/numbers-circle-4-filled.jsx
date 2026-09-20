import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iwrybibvp.css';
import '../../css/h/hf_2iyb6f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="iwrybibvp"/><path class="hf_2iyb6f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:numbers-circle-4-filled"} {...others} />);
}

export default Component;
