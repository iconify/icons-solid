import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a-0gtd2mz.css';
import '../../css/f/f79__7b6k.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="a-0gtd2mz"/><path class="f79__7b6k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:flag-triangle-48"} {...others} />);
}

export default Component;
