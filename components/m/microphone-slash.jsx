import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l7gfoz_0y.css';

const viewBox = {"width":1408,"height":1664};
const content = `<path class="l7gfoz_0y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:microphone-slash"} {...others} />);
}

export default Component;
