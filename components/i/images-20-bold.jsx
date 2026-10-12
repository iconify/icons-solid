import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jqa8c8hrf.css';
import '../../css/c/c4121g0qx.css';
import '../../css/n/ntm445bmd.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="jqa8c8hrf"/><path class="c4121g0qx"/><path class="ntm445bmd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:images-20-bold"} {...others} />);
}

export default Component;
