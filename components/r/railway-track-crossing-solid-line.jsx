import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h5w8kubkf.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="h5w8kubkf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:railway-track-crossing-solid-line"} {...others} />);
}

export default Component;
