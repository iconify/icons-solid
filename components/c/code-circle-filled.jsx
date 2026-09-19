import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rn56m8vwv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rn56m8vwv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:code-circle-filled"} {...others} />);
}

export default Component;
