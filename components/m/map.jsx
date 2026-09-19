import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tb5p3izax.css';
import '../../css/l/l_i_9sbzv.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="tb5p3izax"/><path class="l_i_9sbzv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"foundation:map"} {...others} />);
}

export default Component;
