import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/b/b8s5p2bbo.css';
import '../../css/f/fanskmukn.css';
import '../../css/e/e2o-46l3v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="b8s5p2bbo wm-shadow"/><path class="fanskmukn wm-shadow"/><path class="e2o-46l3v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:chart-gantt"} {...others} />);
}

export default Component;
