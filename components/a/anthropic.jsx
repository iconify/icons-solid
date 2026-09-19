import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cqk6m141h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="b cqk6m141h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxl:anthropic"} {...others} />);
}

export default Component;
