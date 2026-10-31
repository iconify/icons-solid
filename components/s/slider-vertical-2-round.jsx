import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zymrr9x_f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zymrr9x_f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:slider-vertical-2-round"} {...others} />);
}

export default Component;
