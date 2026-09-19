import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j1n8pqbof.css';

const viewBox = {"width":448,"height":512};
const content = `<path class="j1n8pqbof"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:paragraph"} {...others} />);
}

export default Component;
