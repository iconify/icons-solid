import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jpl6ieb9t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jpl6ieb9t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:clock-hour-1-filled"} {...others} />);
}

export default Component;
