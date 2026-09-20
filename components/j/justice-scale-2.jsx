import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/koufdxgky.css';
import '../../css/p/p7els8bqv.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="koufdxgky"/><path class="p7els8bqv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:justice-scale-2"} {...others} />);
}

export default Component;
