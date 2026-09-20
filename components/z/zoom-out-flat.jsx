import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x5qvnsbnb.css';
import '../../css/a/anodjgb8w.css';
import '../../css/c/cr3a1ja6b.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="x5qvnsbnb"/><path class="anodjgb8w"/><path clip-rule="evenodd" class="cr3a1ja6b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:zoom-out-flat"} {...others} />);
}

export default Component;
