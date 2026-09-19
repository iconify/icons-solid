import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bac56-jdz.css';

const viewBox = {"width":1152,"height":1664};
const content = `<path class="bac56-jdz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:microphone"} {...others} />);
}

export default Component;
