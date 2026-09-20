import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jqax-6b-d.css';
import '../../css/i/ivapdzbmk.css';
import '../../css/w/wb367bb3b.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="jqax-6b-d"><path class="ivapdzbmk"/><path class="wb367bb3b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:fish"} {...others} />);
}

export default Component;
