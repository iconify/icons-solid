import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/trlfrfbaa.css';

const viewBox = {"width":243.5,"height":80};
const content = `<path clip-rule="evenodd" class="trlfrfbaa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:hulu-light"} {...others} />);
}

export default Component;
