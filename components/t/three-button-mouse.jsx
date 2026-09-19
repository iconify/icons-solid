import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aj0cu-bml.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="aj0cu-bml"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dinkie-icons:three-button-mouse"} {...others} />);
}

export default Component;
