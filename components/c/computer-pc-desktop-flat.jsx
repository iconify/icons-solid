import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x2s6_nyjj.css';
import '../../css/j/jlhqu0r3z.css';
import '../../css/o/o3pxcybih.css';
import '../../css/a/ar_o8813a.css';
import '../../css/b/bsi7km30e.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="x2s6_nyjj"/><path clip-rule="evenodd" class="jlhqu0r3z"/><path class="o3pxcybih"/><path clip-rule="evenodd" class="ar_o8813a"/><path clip-rule="evenodd" class="bsi7km30e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:computer-pc-desktop-flat"} {...others} />);
}

export default Component;
