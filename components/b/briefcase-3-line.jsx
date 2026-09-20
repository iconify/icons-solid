import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zo4dh6bxq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zo4dh6bxq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:briefcase-3-line"} {...others} />);
}

export default Component;
