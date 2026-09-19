import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wygg5fb5y.css';

const viewBox = {"width":8,"height":8};
const content = `<path class="wygg5fb5y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dinkie-icons:heart-black-suit-circled-small"} {...others} />);
}

export default Component;
