import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lobpfqb2f.css';
import '../../css/h/h79p-pb0n.css';
import '../../css/l/lo4c4xv9d.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="lobpfqb2f"/><path class="h79p-pb0n"/><path class="lo4c4xv9d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:like-1"} {...others} />);
}

export default Component;
