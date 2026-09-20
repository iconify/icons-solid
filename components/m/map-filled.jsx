import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lyeinh2ej.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="lyeinh2ej"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lsicon:map-filled"} {...others} />);
}

export default Component;
