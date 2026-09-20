import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dd4c95bqf.css';
import '../../css/g/ggj0aw4-b.css';
import '../../css/d/dljg8wbfg.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="dd4c95bqf"/><path clip-rule="evenodd" class="ggj0aw4-b"/><path class="dljg8wbfg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:script-2-flat"} {...others} />);
}

export default Component;
