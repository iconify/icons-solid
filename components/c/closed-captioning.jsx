import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vvywd9rkh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vvywd9rkh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uil:closed-captioning"} {...others} />);
}

export default Component;
