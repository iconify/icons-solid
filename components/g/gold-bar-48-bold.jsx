import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tf6id7bqu.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="tf6id7bqu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:gold-bar-48-bold"} {...others} />);
}

export default Component;
