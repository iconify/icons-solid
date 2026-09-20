import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zxa_mgbgt.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="zxa_mgbgt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:woman-symbol"} {...others} />);
}

export default Component;
