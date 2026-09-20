import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qxatubb2b.css';
import '../../css/m/mki_rwb3s.css';
import '../../css/v/vbyqusbtg.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="qxatubb2b"/><path class="mki_rwb3s"/><path clip-rule="evenodd" class="vbyqusbtg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:invisible-1-flat"} {...others} />);
}

export default Component;
