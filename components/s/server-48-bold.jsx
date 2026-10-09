import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ekgc8_cdh.css';
import '../../css/k/k9y255awr.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ekgc8_cdh"/><path class="k9y255awr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:server-48-bold"} {...others} />);
}

export default Component;
