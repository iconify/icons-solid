import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/ktc0rob3z.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ktc0rob3z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:telephone-slash"} {...others} />);
}

export default Component;
