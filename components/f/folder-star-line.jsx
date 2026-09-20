import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q31pl2bmr.css';
import '../../css/y/y0lh2dbky.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="q31pl2bmr"/><path class="y0lh2dbky"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:folder-star-line"} {...others} />);
}

export default Component;
