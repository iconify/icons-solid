import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q4qr5-bbh.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="q4qr5-bbh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:inbox-favorite-solid"} {...others} />);
}

export default Component;
