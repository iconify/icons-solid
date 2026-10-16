import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jdh5c-m9v.css';
import '../../css/b/bf8izsb7o.css';
import '../../css/q/qdhnwmbfo.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="jdh5c-m9v"/><path class="bf8izsb7o"/><path class="qdhnwmbfo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:energy-island-20-bold"} {...others} />);
}

export default Component;
