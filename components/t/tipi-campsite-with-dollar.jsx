import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wga8-vmxr.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="wga8-vmxr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:tipi-campsite-with-dollar"} {...others} />);
}

export default Component;
