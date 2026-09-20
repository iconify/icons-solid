import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g5x6ovvve.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="g5x6ovvve"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:filter-solid"} {...others} />);
}

export default Component;
