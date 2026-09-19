import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/y/y5xd74r1k.css';
import '../../css/z/znk0bvbqq.css';
import '../../css/s/sippiub7w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="y5xd74r1k"/><path class="znk0bvbqq"/><path class="sippiub7w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:job-link"} {...others} />);
}

export default Component;
