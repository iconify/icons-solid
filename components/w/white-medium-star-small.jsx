import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fyfb9dbjh.css';

const viewBox = {"width":8,"height":8};
const content = `<path class="fyfb9dbjh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dinkie-icons:white-medium-star-small"} {...others} />);
}

export default Component;
