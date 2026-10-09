import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a6c7rh25t.css';
import '../../css/r/roygfgbrg.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="a6c7rh25t"/><path class="roygfgbrg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:coupling-48"} {...others} />);
}

export default Component;
