import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mutfufb4a.css';
import '../../css/e/eo5ryvbqs.css';
import '../../css/t/tjrjm1bac.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="mutfufb4a"/><path class="eo5ryvbqs"/><path class="tjrjm1bac"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:wine-glass-48-bold"} {...others} />);
}

export default Component;
