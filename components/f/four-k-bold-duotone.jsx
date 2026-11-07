import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pv_hji6de.css';
import '../../css/j/jvloipb8e.css';
import '../../css/e/e8g5qdb5t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pv_hji6de"/><path class="jvloipb8e"/><path class="e8g5qdb5t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:four-k-bold-duotone"} {...others} />);
}

export default Component;
