import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m-iw6abnx.css';

const viewBox = {"width":512,"height":512};
const content = `<path clip-rule="evenodd" class="m-iw6abnx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"file-icons:systemverilog"} {...others} />);
}

export default Component;
