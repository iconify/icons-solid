import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/viga7s65v.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="viga7s65v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:camper-trailer-with-waste-dump"} {...others} />);
}

export default Component;
