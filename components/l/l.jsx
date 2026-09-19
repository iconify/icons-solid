import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ndhsr-0ln.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="ndhsr-0ln"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:l"} {...others} />);
}

export default Component;
