import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d3j1uwd6s.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="d3j1uwd6s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:ui-folder-family"} {...others} />);
}

export default Component;
