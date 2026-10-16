import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/svb9bze3d.css';
import '../../css/p/ps1xh1lfy.css';
import '../../css/c/czclwmg1z.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="svb9bze3d"/><path class="ps1xh1lfy"/><path class="czclwmg1z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:air-purifier-48-bold"} {...others} />);
}

export default Component;
