import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xyp0m5ztu.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="xyp0m5ztu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:graph-arrow-user-increase-remix"} {...others} />);
}

export default Component;
