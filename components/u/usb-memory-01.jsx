import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/a/ao10ozfpq.css';
import '../../css/c/c2bfh4dgq.css';
import '../../css/o/orzk3obqe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="ao10ozfpq"/><path class="c2bfh4dgq"/><path class="orzk3obqe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:usb-memory-01"} {...others} />);
}

export default Component;
