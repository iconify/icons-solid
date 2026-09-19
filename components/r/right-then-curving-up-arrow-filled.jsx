import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bz-9f21ke.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="bz-9f21ke"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dinkie-icons:right-then-curving-up-arrow-filled"} {...others} />);
}

export default Component;
