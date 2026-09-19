import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ad44kbbwp.css';
import '../../css/j/jf9rcrubp.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ad44kbbwp"/><path class="jf9rcrubp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:md-photos"} {...others} />);
}

export default Component;
