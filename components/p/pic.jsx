import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/x/x9u4gylcp.css';
import '../../css/i/ixqdcsbvp.css';
import '../../css/a/a41nocdac.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path clip-rule="evenodd" class="x9u4gylcp"/><path clip-rule="evenodd" class="ixqdcsbvp"/><path class="a41nocdac"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:pic"} {...others} />);
}

export default Component;
