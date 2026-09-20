import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h9a2o1loy.css';
import '../../css/w/wfxyse_wh.css';
import '../../css/w/wp2cv8b3n.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/v/v--798y_j.css';
import '../../css/x/x7xunxboa.css';

const viewBox = {"width":72,"height":72};
const content = `<g class="h9a2o1loy"><path class="wfxyse_wh"/><path class="wp2cv8b3n"/></g><g class="jn8qy4bru"><path class="v--798y_j"/><path class="x7xunxboa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:white-hair"} {...others} />);
}

export default Component;
