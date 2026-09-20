import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ezx0-pv8t.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ezx0-pv8t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:camera-square-outline"} {...others} />);
}

export default Component;
