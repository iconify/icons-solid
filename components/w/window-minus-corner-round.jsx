import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dxuzy2bmh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dxuzy2bmh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:window-minus-corner-round"} {...others} />);
}

export default Component;
