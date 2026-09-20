import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vi_-236it.css';
import '../../css/h/h5rfeh34x.css';
import '../../css/v/vnpd8_boz.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="vi_-236it"/><path class="h5rfeh34x"/><path clip-rule="evenodd" class="vnpd8_boz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:watch-circle-charging-flat"} {...others} />);
}

export default Component;
