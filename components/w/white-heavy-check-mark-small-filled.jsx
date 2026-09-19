import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r60zgo13b.css';

const viewBox = {"width":8,"height":8};
const content = `<path class="r60zgo13b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dinkie-icons:white-heavy-check-mark-small-filled"} {...others} />);
}

export default Component;
