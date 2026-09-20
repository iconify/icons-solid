import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7xoccxb.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="sv7xoccxb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:triangles-left-right-in-wide-rounded-rectangle"} {...others} />);
}

export default Component;
