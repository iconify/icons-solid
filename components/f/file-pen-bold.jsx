import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u6tsj1b8b.css';
import '../../css/u/uxo_8abdr.css';
import '../../css/e/ef63e0_qa.css';
import '../../css/w/wm3j448rr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="u6tsj1b8b"/><path class="uxo_8abdr"/><path clip-rule="evenodd" class="ef63e0_qa"/><path class="wm3j448rr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:file-pen-bold"} {...others} />);
}

export default Component;
