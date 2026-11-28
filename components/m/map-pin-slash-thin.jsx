import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ncbe981cb.css';

const viewBox = {"width":256,"height":256};
const content = `<path class="ncbe981cb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pullo:map-pin-slash-thin"} {...others} />);
}

export default Component;
