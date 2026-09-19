import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kvilx1q3c.css';
import '../../css/j/j3pc6w1hl.css';
import '../../css/e/ec7k6mp6h.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="kvilx1q3c"><path class="j3pc6w1hl"/><path class="ec7k6mp6h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:outdoor"} {...others} />);
}

export default Component;
