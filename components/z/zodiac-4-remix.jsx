import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gkd3jjpvk.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="gkd3jjpvk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:zodiac-4-remix"} {...others} />);
}

export default Component;
