import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/s/sdw56mbgo.css';
import '../../css/h/h5gmtvkuk.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="sdw56mbgo"/><path class="h5gmtvkuk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:international"} {...others} />);
}

export default Component;
