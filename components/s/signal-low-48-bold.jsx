import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n9sm63b6y.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="n9sm63b6y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:signal-low-48-bold"} {...others} />);
}

export default Component;
