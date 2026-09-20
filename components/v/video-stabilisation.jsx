import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rz0f1vbeo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rz0f1vbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:video-stabilisation"} {...others} />);
}

export default Component;
