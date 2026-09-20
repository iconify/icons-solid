import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oq77w7b6q.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="oq77w7b6q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:thumbs-down"} {...others} />);
}

export default Component;
