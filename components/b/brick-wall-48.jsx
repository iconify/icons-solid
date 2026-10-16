import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vkr2umbbc.css';
import '../../css/y/yzb6z-b5r.css';
import '../../css/c/ct3eolbkd.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="vkr2umbbc"/><path class="yzb6z-b5r"/><path class="ct3eolbkd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:brick-wall-48"} {...others} />);
}

export default Component;
