import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k5rr84b6j.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="k5rr84b6j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:clock-ten-solid"} {...others} />);
}

export default Component;
