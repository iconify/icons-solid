import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nf6rktajg.css';
import '../../css/f/fd0ve6bab.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nf6rktajg"/><path class="fd0ve6bab"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:calendar"} {...others} />);
}

export default Component;
