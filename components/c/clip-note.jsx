import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gxlk60b9n.css';

const viewBox = {"width":1664,"height":1792};
const content = `<path class="gxlk60b9n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vs:clip-note"} {...others} />);
}

export default Component;
