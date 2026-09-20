import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zhoebh7hz.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="zhoebh7hz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:filter-1-flat"} {...others} />);
}

export default Component;
