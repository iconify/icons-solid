import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/s/s71mxefap.css';
import '../../css/g/gb1459ele.css';
import '../../css/o/o8c7gnifu.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="s71mxefap"/><path class="gb1459ele"/><path class="o8c7gnifu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:pisces"} {...others} />);
}

export default Component;
