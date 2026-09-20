import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rm4rvkc0n.css';
import '../../css/p/p1djqlbbh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rm4rvkc0n"/><path class="p1djqlbbh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:campground-fill"} {...others} />);
}

export default Component;
