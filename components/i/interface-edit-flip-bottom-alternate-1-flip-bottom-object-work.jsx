import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v02yasbok.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="v02yasbok"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-edit-flip-bottom-alternate-1-flip-bottom-object-work"} {...others} />);
}

export default Component;
