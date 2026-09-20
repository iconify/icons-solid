import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wvfw3i8xa.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wvfw3i8xa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"simple-icons:burpsuite"} {...others} />);
}

export default Component;
