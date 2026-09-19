import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tr36qhbyi.css';
import '../../css/d/d8wdhlbaq.css';
import '../../css/p/pn5cztbkd.css';
import '../../css/r/r0qx3-b8s.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="tr36qhbyi"><path class="d8wdhlbaq"/><path class="pn5cztbkd"/><path class="r0qx3-b8s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:torch"} {...others} />);
}

export default Component;
