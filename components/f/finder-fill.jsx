import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yu9fc8cxn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yu9fc8cxn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:finder-fill"} {...others} />);
}

export default Component;
