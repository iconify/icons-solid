import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bp3op9bqf.css';
import '../../css/w/wtfmx7b3v.css';
import '../../css/r/rypkkacwx.css';
import '../../css/k/klhwmxbnn.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="bp3op9bqf"/><g class="wtfmx7b3v"><path class="rypkkacwx"/><path class="klhwmxbnn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:feed-in"} {...others} />);
}

export default Component;
