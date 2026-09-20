import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h3841h7ms.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="h3841h7ms"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:location-pin-disabled-remix"} {...others} />);
}

export default Component;
