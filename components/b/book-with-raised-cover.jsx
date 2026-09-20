import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hj_uv5o9p.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="hj_uv5o9p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:book-with-raised-cover"} {...others} />);
}

export default Component;
