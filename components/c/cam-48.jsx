import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pl-yfkvrr.css';
import '../../css/p/p7gth1bju.css';
import '../../css/b/bujm-4v9z.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="pl-yfkvrr"/><path class="p7gth1bju"/><path class="bujm-4v9z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:cam-48"} {...others} />);
}

export default Component;
