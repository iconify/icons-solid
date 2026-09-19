import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mfd8llbmb.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="mfd8llbmb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:speech-language-therapy"} {...others} />);
}

export default Component;
