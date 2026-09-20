import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o60ci1m4s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="o60ci1m4s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uil:tv-retro-slash"} {...others} />);
}

export default Component;
