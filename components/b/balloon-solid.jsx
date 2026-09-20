import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fcb7gsb6t.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="fcb7gsb6t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:balloon-solid"} {...others} />);
}

export default Component;
