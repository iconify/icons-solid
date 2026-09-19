import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f54c3mm_n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="f54c3mm_n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:graduation-cap-alt"} {...others} />);
}

export default Component;
