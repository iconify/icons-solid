import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wnet24b2r.css';

const viewBox = {"width":56,"height":56};
const content = `<path class="wnet24b2r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"f7:captions-bubble-fill"} {...others} />);
}

export default Component;
