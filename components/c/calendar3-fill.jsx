import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i3q8_p7qu.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="i3q8_p7qu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:calendar3-fill"} {...others} />);
}

export default Component;
