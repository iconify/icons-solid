import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a0v08kmee.css';
import '../../css/f/fagzixtrx.css';
import '../../css/b/bwojtebtt.css';
import '../../css/o/o51s90b0v.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="a0v08kmee"/><path class="fagzixtrx"/><path clip-rule="evenodd" class="bwojtebtt"/><path class="o51s90b0v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:edit-image-photo-flat"} {...others} />);
}

export default Component;
