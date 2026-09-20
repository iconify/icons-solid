import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f77-4yb8a.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="f77-4yb8a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:receipt-remix"} {...others} />);
}

export default Component;
