import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/l/l6wq4teao.css';
import '../../css/p/p7ix2ibsl.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="l6wq4teao"/><path clip-rule="evenodd" class="p7ix2ibsl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:radar-two"} {...others} />);
}

export default Component;
