import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d4ph5-szq.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="d4ph5-szq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:microphone-16"} {...others} />);
}

export default Component;
