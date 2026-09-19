import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/c/c4k5scc4t.css';
import '../../css/k/k3_t4cbov.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="c4k5scc4t"/><path class="k3_t4cbov"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:straw-hat"} {...others} />);
}

export default Component;
