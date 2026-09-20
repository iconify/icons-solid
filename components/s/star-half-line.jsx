import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j_h5xf82h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j_h5xf82h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:star-half-line"} {...others} />);
}

export default Component;
