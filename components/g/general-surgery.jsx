import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v6qh3ib3h.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="v6qh3ib3h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:general-surgery"} {...others} />);
}

export default Component;
