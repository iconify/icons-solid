import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dl-eb8nlu.css';
import '../../css/l/l9u6gsyxp.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="dl-eb8nlu"/><path class="l9u6gsyxp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:note-48-bold"} {...others} />);
}

export default Component;
