import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pys7aibts.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="pys7aibts"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:creative-commons-remix"} {...others} />);
}

export default Component;
