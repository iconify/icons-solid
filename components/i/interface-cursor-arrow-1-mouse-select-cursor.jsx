import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y78ufbddo.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="y78ufbddo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-cursor-arrow-1-mouse-select-cursor"} {...others} />);
}

export default Component;
