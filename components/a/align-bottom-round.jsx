import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sh-z7sdsk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sh-z7sdsk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:align-bottom-round"} {...others} />);
}

export default Component;
