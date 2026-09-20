import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t87qyshyx.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="t87qyshyx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:wind-flow-1-flat"} {...others} />);
}

export default Component;
