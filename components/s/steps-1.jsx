import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rvnqahb0g.css';
import '../../css/y/y1hhc5b6u.css';
import '../../css/i/ip8pm7b3i.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rvnqahb0g"><path class="y1hhc5b6u"/><path class="ip8pm7b3i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:steps-1"} {...others} />);
}

export default Component;
