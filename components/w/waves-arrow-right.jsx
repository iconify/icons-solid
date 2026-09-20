import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fuyr6obnf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fuyr6obnf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:waves-arrow-right"} {...others} />);
}

export default Component;
