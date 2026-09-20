import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p7xgafu0h.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="p7xgafu0h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:cog-flat"} {...others} />);
}

export default Component;
