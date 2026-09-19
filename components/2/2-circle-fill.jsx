import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yt6747b6d.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="yt6747b6d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:2-circle-fill"} {...others} />);
}

export default Component;
