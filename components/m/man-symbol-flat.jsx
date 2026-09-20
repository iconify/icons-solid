import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/du-cu2mmt.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="du-cu2mmt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:man-symbol-flat"} {...others} />);
}

export default Component;
