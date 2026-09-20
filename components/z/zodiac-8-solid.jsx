import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dnp1ws47m.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="dnp1ws47m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:zodiac-8-solid"} {...others} />);
}

export default Component;
