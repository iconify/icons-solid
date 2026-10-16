import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o7ri8jbte.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="o7ri8jbte"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:layout-dashboard-48-bold"} {...others} />);
}

export default Component;
