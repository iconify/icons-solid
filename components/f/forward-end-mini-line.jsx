import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vlszn25vu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vlszn25vu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:forward-end-mini-line"} {...others} />);
}

export default Component;
