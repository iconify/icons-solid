import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jslnalb3i.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="jslnalb3i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:group-discussion-meeting2x-outline"} {...others} />);
}

export default Component;
