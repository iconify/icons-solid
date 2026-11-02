import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d11tu2hwl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="d11tu2hwl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:za-sort-descending-letters-line"} {...others} />);
}

export default Component;
