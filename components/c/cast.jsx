import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jo_x69yli.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jo_x69yli"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair-light:cast"} {...others} />);
}

export default Component;
