import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xdz-yacix.css';
import '../../css/n/nebbxlbtg.css';
import '../../css/h/h577y2miu.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="xdz-yacix"/><path clip-rule="evenodd" class="nebbxlbtg"/><path clip-rule="evenodd" class="h577y2miu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:credit-card-2-flat"} {...others} />);
}

export default Component;
