import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h6sxwjt4z.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h6sxwjt4z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:creative-commons-zero-line"} {...others} />);
}

export default Component;
