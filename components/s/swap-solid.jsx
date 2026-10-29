import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w5tgd1b3v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="w5tgd1b3v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:swap-solid"} {...others} />);
}

export default Component;
