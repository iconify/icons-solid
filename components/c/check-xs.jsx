import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cl8fc0bgt.css';

const viewBox = {"width":12,"height":12};
const content = `<path clip-rule="evenodd" class="cl8fc0bgt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pajamas:check-xs"} {...others} />);
}

export default Component;
