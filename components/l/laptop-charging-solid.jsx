import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zt639tbvm.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="zt639tbvm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:laptop-charging-solid"} {...others} />);
}

export default Component;
