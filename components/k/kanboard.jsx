import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zqamdbc7e.css';
import '../../css/n/nmg5wwk4w.css';

const viewBox = {"width":144,"height":144};
const content = `<path class="zqamdbc7e"/><path class="nmg5wwk4w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:kanboard"} {...others} />);
}

export default Component;
