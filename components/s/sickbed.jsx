import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/r/rzkg9v93r.css';
import '../../css/v/v3g6xoxym.css';
import '../../css/k/ksnlu0kra.css';
import '../../css/a/apvj7jbhz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="rzkg9v93r"/><circle class="v3g6xoxym"/><path class="ksnlu0kra"/><path class="apvj7jbhz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:sickbed"} {...others} />);
}

export default Component;
