import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h9a2o1loy.css';
import '../../css/r/rm377hqcb.css';
import '../../css/e/ee1wp2bsb.css';
import '../../css/y/yjpmiob1r.css';
import '../../css/c/cur45eb0e.css';

const viewBox = {"width":72,"height":72};
const content = `<g class="h9a2o1loy"><path class="rm377hqcb"/><path class="ee1wp2bsb"/><path class="yjpmiob1r"/></g><path class="cur45eb0e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:kitchen-knife"} {...others} />);
}

export default Component;
