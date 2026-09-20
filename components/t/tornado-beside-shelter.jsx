import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/extss2joy.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="extss2joy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:tornado-beside-shelter"} {...others} />);
}

export default Component;
