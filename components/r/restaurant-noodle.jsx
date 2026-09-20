import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y4r9pjegb.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="y4r9pjegb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"maki:restaurant-noodle"} {...others} />);
}

export default Component;
