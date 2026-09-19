import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vm3ivccum.css';
import '../../css/j/j12neilvd.css';
import '../../css/s/stxxazbuh.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="vm3ivccum"><path class="j12neilvd"/><path class="stxxazbuh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:right-branch-one"} {...others} />);
}

export default Component;
