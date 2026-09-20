import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wjgcx4_5w.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="wjgcx4_5w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:map-pin"} {...others} />);
}

export default Component;
