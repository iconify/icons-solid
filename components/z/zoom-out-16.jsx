import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bqt137b9d.css';
import '../../css/w/wm45_4p5c.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="bqt137b9d"/><path clip-rule="evenodd" class="wm45_4p5c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:zoom-out-16"} {...others} />);
}

export default Component;
