import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rtqntyqlm.css';
import '../../css/j/jcqvt8bwl.css';
import '../../css/m/mmwz_gbga.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rtqntyqlm wm-shadow"/><path class="jcqvt8bwl wm-k"/><path class="mmwz_gbga wm-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:arrow-up"} {...others} />);
}

export default Component;
