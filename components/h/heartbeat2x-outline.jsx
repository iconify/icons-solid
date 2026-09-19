import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v7mb3_b4q.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="v7mb3_b4q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:heartbeat2x-outline"} {...others} />);
}

export default Component;
