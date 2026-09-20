import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f6q3khb4k.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="f6q3khb4k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:brand-linkedin-filled"} {...others} />);
}

export default Component;
