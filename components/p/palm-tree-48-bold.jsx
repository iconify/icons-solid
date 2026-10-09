import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tfu98d8ng.css';
import '../../css/p/pdm5qacug.css';
import '../../css/a/a-9h4gbxm.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="tfu98d8ng"/><path class="pdm5qacug"/><path class="a-9h4gbxm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:palm-tree-48-bold"} {...others} />);
}

export default Component;
