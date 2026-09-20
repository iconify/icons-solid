import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pc3vo21sg.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="pc3vo21sg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:search-history-browser-remix"} {...others} />);
}

export default Component;
