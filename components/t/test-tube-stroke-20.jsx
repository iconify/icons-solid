import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x6y1d0ihj.css';
import '../../css/y/ykou9hbnv.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="x6y1d0ihj"/><path class="ykou9hbnv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:test-tube-stroke-20"} {...others} />);
}

export default Component;
