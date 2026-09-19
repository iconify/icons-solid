import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/khmt06b9h.css';
import '../../css/l/lrnov0b9n.css';
import '../../css/o/o7k4dccfe.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="khmt06b9h"/><path class="lrnov0b9n"/><path class="o7k4dccfe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:muscle"} {...others} />);
}

export default Component;
