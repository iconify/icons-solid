import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/c/c8rreybsc.css';
import '../../css/a/ajen750kr.css';
import '../../css/h/hek85dbhv.css';
import '../../css/t/tjuoppb1k.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="s9cl3zbei"><circle class="c8rreybsc"/><path class="ajen750kr"/><circle class="hek85dbhv"/><path class="tjuoppb1k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:appointment"} {...others} />);
}

export default Component;
