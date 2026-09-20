import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9hjf8pnn.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="s9hjf8pnn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:mantra"} {...others} />);
}

export default Component;
