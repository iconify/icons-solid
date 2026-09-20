import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fmx758bjt.css';
import '../../css/g/g6rzu6bev.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="fmx758bjt"/><path class="g6rzu6bev"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:cog-o"} {...others} />);
}

export default Component;
