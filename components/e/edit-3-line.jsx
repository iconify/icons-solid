import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t-pk5x7ot.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="t-pk5x7ot"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:edit-3-line"} {...others} />);
}

export default Component;
