import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j1n9x_bgf.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="j1n9x_bgf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:shredder-remix"} {...others} />);
}

export default Component;
