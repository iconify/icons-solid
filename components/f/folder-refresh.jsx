import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rz0bm-2uj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rz0bm-2uj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:folder-refresh"} {...others} />);
}

export default Component;
