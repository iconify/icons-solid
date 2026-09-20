import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/n/n3rld-six.css';
import '../../css/a/ani7f3b7w.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="n3rld-six"/><path class="ani7f3b7w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:align-right"} {...others} />);
}

export default Component;
