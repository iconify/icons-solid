import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bxxbc6bxw.css';
import '../../css/x/x4ov81bqg.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="bxxbc6bxw"/><path class="x4ov81bqg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:ticket-1"} {...others} />);
}

export default Component;
