import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wy4xbiqqa.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="wy4xbiqqa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:cellular-network-lte"} {...others} />);
}

export default Component;
