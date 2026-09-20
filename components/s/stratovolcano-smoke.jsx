import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/muky7dbqd.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="muky7dbqd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"roentgen:stratovolcano-smoke"} {...others} />);
}

export default Component;
