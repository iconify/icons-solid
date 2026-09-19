import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fp_oi_--r.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="fp_oi_--r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:inboxes-fill"} {...others} />);
}

export default Component;
