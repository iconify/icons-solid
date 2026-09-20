import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gpfjh6p0r.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="gpfjh6p0r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"roentgen:fire-hydrant"} {...others} />);
}

export default Component;
