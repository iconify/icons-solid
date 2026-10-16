import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/if0nh-buo.css';
import '../../css/b/b57rxsbat.css';
import '../../css/i/ivod1rbyr.css';

const viewBox = {"width":139.149,"height":111.25};
const content = `<path class="if0nh-buo"/><path class="b57rxsbat"/><path class="ivod1rbyr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:marimo"} {...others} />);
}

export default Component;
