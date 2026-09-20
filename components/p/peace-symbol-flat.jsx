import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/orre3bifv.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="orre3bifv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:peace-symbol-flat"} {...others} />);
}

export default Component;
