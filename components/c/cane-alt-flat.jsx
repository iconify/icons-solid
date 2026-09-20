import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nk9y_wb6c.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="nk9y_wb6c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:cane-alt-flat"} {...others} />);
}

export default Component;
