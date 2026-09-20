import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xf5i56b4h.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="xf5i56b4h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:add-square-solid"} {...others} />);
}

export default Component;
