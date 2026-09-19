import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/na20dj39s.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="na20dj39s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:weights"} {...others} />);
}

export default Component;
