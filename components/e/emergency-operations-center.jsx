import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j7lf_8b-k.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="j7lf_8b-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:emergency-operations-center"} {...others} />);
}

export default Component;
