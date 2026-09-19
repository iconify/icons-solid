import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p5rwvjb0s.css';

const viewBox = {"width":448,"height":512};
const content = `<path class="p5rwvjb0s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"academicons:psyarxiv-square"} {...others} />);
}

export default Component;
