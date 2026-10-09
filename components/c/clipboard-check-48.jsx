import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x-s18fbbr.css';
import '../../css/k/ktyrg6b5f.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="x-s18fbbr"/><path class="ktyrg6b5f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:clipboard-check-48"} {...others} />);
}

export default Component;
