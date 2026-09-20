import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tzh6wybpa.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="tzh6wybpa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:zodiac-1-solid"} {...others} />);
}

export default Component;
