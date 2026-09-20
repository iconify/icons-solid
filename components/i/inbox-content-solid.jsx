import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jc0t97b9h.css';
import '../../css/d/do2f6-r1z.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="jc0t97b9h"/><path class="do2f6-r1z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:inbox-content-solid"} {...others} />);
}

export default Component;
