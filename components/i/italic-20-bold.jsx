import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k40yvq1wf.css';
import '../../css/e/e1pitrb3n.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="k40yvq1wf"/><path class="e1pitrb3n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:italic-20-bold"} {...others} />);
}

export default Component;
