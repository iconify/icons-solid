import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to5_hpm1w.css';
import '../../css/g/g4457jhvt.css';
import '../../css/z/zm95khbyi.css';
import '../../css/q/qo31i1bng.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="to5_hpm1w"><path class="g4457jhvt"/><path clip-rule="evenodd" class="zm95khbyi"/><path class="qo31i1bng"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:brain"} {...others} />);
}

export default Component;
