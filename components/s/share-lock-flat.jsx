import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zimyt6t2s.css';
import '../../css/h/h8b21yvqe.css';
import '../../css/o/odwhs5n2d.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="zimyt6t2s"/><path clip-rule="evenodd" class="h8b21yvqe"/><path clip-rule="evenodd" class="odwhs5n2d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:share-lock-flat"} {...others} />);
}

export default Component;
