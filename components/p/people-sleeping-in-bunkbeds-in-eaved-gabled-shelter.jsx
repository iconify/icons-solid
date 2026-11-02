import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w2gs35byi.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="w2gs35byi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:people-sleeping-in-bunkbeds-in-eaved-gabled-shelter"} {...others} />);
}

export default Component;
