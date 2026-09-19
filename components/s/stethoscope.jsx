import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vbzv8sbul.css';

const viewBox = {"width":1408,"height":1536};
const content = `<path class="vbzv8sbul"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:stethoscope"} {...others} />);
}

export default Component;
