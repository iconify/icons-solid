import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i9g4-upkk.css';
import '../../css/j/j4n-avbkq.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="i9g4-upkk"/><path class="j4n-avbkq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:scons-light"} {...others} />);
}

export default Component;
