import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fsuz01gsk.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="fsuz01gsk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:address-card-solid"} {...others} />);
}

export default Component;
