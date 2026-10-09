import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yv842m9yr.css';
import '../../css/r/rycvim_ja.css';
import '../../css/h/h49_-cc9y.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="yv842m9yr"/><path class="rycvim_ja"/><path class="h49_-cc9y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:weir-20-bold"} {...others} />);
}

export default Component;
