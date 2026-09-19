import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/me89-bcny.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="me89-bcny"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:trophy-solid"} {...others} />);
}

export default Component;
