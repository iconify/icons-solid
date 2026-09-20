import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w3qhq9u6d.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="w3qhq9u6d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:hard-drive-1-solid"} {...others} />);
}

export default Component;
