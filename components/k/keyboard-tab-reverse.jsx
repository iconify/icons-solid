import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tumxz3yoh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tumxz3yoh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:keyboard-tab-reverse"} {...others} />);
}

export default Component;
