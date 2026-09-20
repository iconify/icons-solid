import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q8fzmcbjm.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="q8fzmcbjm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:entrance-station"} {...others} />);
}

export default Component;
