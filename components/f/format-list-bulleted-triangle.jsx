import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zbup9w5tk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zbup9w5tk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:format-list-bulleted-triangle"} {...others} />);
}

export default Component;
