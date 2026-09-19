import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fsa2w0bko.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fsa2w0bko"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ci:monitor-play"} {...others} />);
}

export default Component;
