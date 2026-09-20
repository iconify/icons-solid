import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e2yej0b7l.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="e2yej0b7l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:north-carolina-with-capital-star"} {...others} />);
}

export default Component;
