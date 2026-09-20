import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/ruy4n5q6c.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="ruy4n5q6c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:bluetooth-remix"} {...others} />);
}

export default Component;
