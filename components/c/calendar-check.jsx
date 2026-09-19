import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i_xvtz4fm.css';

const viewBox = {"width":448,"height":512};
const content = `<path class="i_xvtz4fm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-regular:calendar-check"} {...others} />);
}

export default Component;
