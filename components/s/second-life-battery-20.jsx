import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pc00mmbgj.css';
import '../../css/d/d99-61b8w.css';
import '../../css/f/f_st51bya.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="pc00mmbgj"/><path class="d99-61b8w"/><path class="f_st51bya"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:second-life-battery-20"} {...others} />);
}

export default Component;
