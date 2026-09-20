import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tvf0hfb8q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tvf0hfb8q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uil:align-center-alt"} {...others} />);
}

export default Component;
