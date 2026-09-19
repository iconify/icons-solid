import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tztkk4_1b.css';

const viewBox = {"width":256,"height":256};
const content = `<path class="tztkk4_1b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fad:thunderbolt"} {...others} />);
}

export default Component;
