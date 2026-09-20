import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jdkhh5u2a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jdkhh5u2a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:x-twitter"} {...others} />);
}

export default Component;
