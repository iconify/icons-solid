import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fs02mwb7g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fs02mwb7g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:layout-bottom-close-line"} {...others} />);
}

export default Component;
