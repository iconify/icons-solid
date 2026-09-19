import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwq3qbwrk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wwq3qbwrk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:between-vertical-start"} {...others} />);
}

export default Component;
