import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o7w6f-o8y.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="o7w6f-o8y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:skip-back-48"} {...others} />);
}

export default Component;
