import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dha5zw5kn.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="dha5zw5kn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:waterfalls-v"} {...others} />);
}

export default Component;
