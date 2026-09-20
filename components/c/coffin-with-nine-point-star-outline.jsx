import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v6ud6qgab.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="v6ud6qgab"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:coffin-with-nine-point-star-outline"} {...others} />);
}

export default Component;
