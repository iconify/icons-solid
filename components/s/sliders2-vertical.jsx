import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yv1dzs1tm.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="yv1dzs1tm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:sliders2-vertical"} {...others} />);
}

export default Component;
