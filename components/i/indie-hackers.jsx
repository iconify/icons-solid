import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u3-66vhye.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="u3-66vhye"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:indie-hackers"} {...others} />);
}

export default Component;
