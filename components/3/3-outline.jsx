import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p6a_92b6g.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="p6a_92b6g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:3-outline"} {...others} />);
}

export default Component;
