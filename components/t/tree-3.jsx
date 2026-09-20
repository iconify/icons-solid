import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gw9zefftq.css';
import '../../css/t/t65lx7nsp.css';
import '../../css/k/k-vowsbai.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="gw9zefftq"/><path class="t65lx7nsp"/><path class="k-vowsbai"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:tree-3"} {...others} />);
}

export default Component;
