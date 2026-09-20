import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i1vnq8g0v.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="i1vnq8g0v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:traditional-storage-jars"} {...others} />);
}

export default Component;
