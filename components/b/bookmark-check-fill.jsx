import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qbmj_suox.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qbmj_suox"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:bookmark-check-fill"} {...others} />);
}

export default Component;
