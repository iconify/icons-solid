import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/txd9fd4nn.css';

const viewBox = {"width":256,"height":256};
const content = `<path class="txd9fd4nn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pullo:dumpster-bold"} {...others} />);
}

export default Component;
