import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wtfmx7b3v.css';
import '../../css/b/badteebsr.css';
import '../../css/a/ahp19lbao.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="wtfmx7b3v"><path class="badteebsr"/><path class="ahp19lbao"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:right"} {...others} />);
}

export default Component;
