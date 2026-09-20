import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/r/rfnwcgbgh.css';
import '../../css/l/lcxwjwn6i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="rfnwcgbgh"/><path class="lcxwjwn6i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:youtube"} {...others} />);
}

export default Component;
