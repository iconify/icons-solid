import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ljq432_5z.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="ljq432_5z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:7"} {...others} />);
}

export default Component;
