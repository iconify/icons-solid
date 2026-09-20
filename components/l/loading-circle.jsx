import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/w/wgluklhkf.css';
import '../../css/h/hlkfs3hmp.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="wgluklhkf"/><path class="hlkfs3hmp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:loading-circle"} {...others} />);
}

export default Component;
