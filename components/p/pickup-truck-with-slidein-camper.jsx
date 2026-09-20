import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f7z33-zvs.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="f7z33-zvs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:pickup-truck-with-slidein-camper"} {...others} />);
}

export default Component;
