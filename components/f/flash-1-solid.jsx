import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v7q32y5jl.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="v7q32y5jl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:flash-1-solid"} {...others} />);
}

export default Component;
