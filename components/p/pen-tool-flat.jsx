import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l9dhmtbsb.css';
import '../../css/i/i8t26pb6w.css';
import '../../css/j/jhicv9b5n.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="l9dhmtbsb"/><path class="i8t26pb6w"/><path clip-rule="evenodd" class="jhicv9b5n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:pen-tool-flat"} {...others} />);
}

export default Component;
