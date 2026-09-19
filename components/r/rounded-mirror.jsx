import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vie_4_2vx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vie_4_2vx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:rounded-mirror"} {...others} />);
}

export default Component;
