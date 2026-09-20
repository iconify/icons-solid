import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wm-xvnbyw.css';

const viewBox = {"width":228,"height":120};
const content = `<path clip-rule="evenodd" class="wm-xvnbyw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:n8n"} {...others} />);
}

export default Component;
