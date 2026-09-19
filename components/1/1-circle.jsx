import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vp_tly-yv.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="vp_tly-yv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:1-circle"} {...others} />);
}

export default Component;
