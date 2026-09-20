import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u4fy8gbkl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="u4fy8gbkl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uil:baseball-ball"} {...others} />);
}

export default Component;
