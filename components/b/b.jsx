import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g7o2b8ahf.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="g7o2b8ahf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:b"} {...others} />);
}

export default Component;
