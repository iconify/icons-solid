import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/njm7sdbty.css';
import '../../css/m/mazh1ozjz.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="njm7sdbty"/><path class="mazh1ozjz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:folder-open-48"} {...others} />);
}

export default Component;
