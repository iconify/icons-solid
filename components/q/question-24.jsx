import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wom0x6b6m.css';
import '../../css/c/cw-owhbls.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wom0x6b6m"/><path clip-rule="evenodd" class="cw-owhbls"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:question-24"} {...others} />);
}

export default Component;
