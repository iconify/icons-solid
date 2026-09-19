import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/l/lvzgdqdyq.css';
import '../../css/y/y36yww21t.css';
import '../../css/j/jcocdpb8j.css';
import '../../css/i/iwe9abbhf.css';
import '../../css/s/sr6x3ialb.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="s9cl3zbei"><path clip-rule="evenodd" class="lvzgdqdyq"/><path class="y36yww21t"/><path class="jcocdpb8j"/><path class="iwe9abbhf"/><path class="sr6x3ialb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:sd-card"} {...others} />);
}

export default Component;
