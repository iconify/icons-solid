import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mh0vd8g8b.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="mh0vd8g8b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:satellite-bold"} {...others} />);
}

export default Component;
