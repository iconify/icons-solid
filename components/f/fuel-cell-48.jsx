import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j_hcd3bgg.css';
import '../../css/q/qi6qfqz0i.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="j_hcd3bgg"/><path class="qi6qfqz0i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:fuel-cell-48"} {...others} />);
}

export default Component;
