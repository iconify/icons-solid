import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y7l-3ibnf.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="y7l-3ibnf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:user-sync-online-in-person-solid"} {...others} />);
}

export default Component;
