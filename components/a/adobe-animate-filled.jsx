import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wp9pt-bnu.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="wp9pt-bnu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dinkie-icons:adobe-animate-filled"} {...others} />);
}

export default Component;
