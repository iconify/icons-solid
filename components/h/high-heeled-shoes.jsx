import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/w/w_9oj7b3z.css';
import '../../css/z/zwzidzbmk.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="w_9oj7b3z"/><path class="zwzidzbmk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:high-heeled-shoes"} {...others} />);
}

export default Component;
