import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oc4hu_b3q.css';
import '../../css/k/kigjocbeh.css';
import '../../css/j/jqo23tbqa.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="oc4hu_b3q"/><path class="kigjocbeh"/><path class="jqo23tbqa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:cupcake-48-bold"} {...others} />);
}

export default Component;
