import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/epjs85bbb.css';

const viewBox = {"width":22,"height":22};
const content = `<path class="epjs85bbb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"memory:table-top-spiral-stairs-round-down"} {...others} />);
}

export default Component;
