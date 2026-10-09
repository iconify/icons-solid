import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gy03lmbaj.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="gy03lmbaj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:spa-stones-48-bold"} {...others} />);
}

export default Component;
