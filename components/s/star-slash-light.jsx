import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wn-x8ouzq.css';

const viewBox = {"width":256,"height":256};
const content = `<path class="wn-x8ouzq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pullo:star-slash-light"} {...others} />);
}

export default Component;
