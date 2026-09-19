import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/x/xcgj7jbrn.css';
import '../../css/n/n50kjvxhj.css';
import '../../css/y/y2ebboaxr.css';
import '../../css/k/kt5shjbak.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="xcgj7jbrn"/><rect class="n50kjvxhj"/><path class="y2ebboaxr"/><path class="kt5shjbak"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:juice"} {...others} />);
}

export default Component;
