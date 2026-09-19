import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/l/lfk0fac0a.css';
import '../../css/a/a_zcllb4j.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="lfk0fac0a"/><path class="a_zcllb4j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:collapse-text-input"} {...others} />);
}

export default Component;
