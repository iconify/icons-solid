import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s1jmd4bmi.css';
import '../../css/h/haze59b4w.css';
import '../../css/z/zyijgil5y.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="s1jmd4bmi"/><path class="haze59b4w"/><path class="zyijgil5y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:posts-carousel-horizontal-outline"} {...others} />);
}

export default Component;
