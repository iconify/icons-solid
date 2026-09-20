import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nax3mvb3q.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="nax3mvb3q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"roentgen:tube-wave-left-wave-right"} {...others} />);
}

export default Component;
