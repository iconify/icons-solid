import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yuqu2b3jw.css';
import '../../css/u/uxzknvoyc.css';

const viewBox = {"width":25,"height":25};
const content = `<path class="yuqu2b3jw"/><path clip-rule="evenodd" class="uxzknvoyc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:targon"} {...others} />);
}

export default Component;
