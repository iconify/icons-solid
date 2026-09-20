import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fm5p7nbqb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fm5p7nbqb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:philippine-peso"} {...others} />);
}

export default Component;
