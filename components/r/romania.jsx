import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jwr0h7biq.css';
import '../../css/r/r_uwoyl_r.css';
import '../../css/t/t2w8mls_d.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="jwr0h7biq"/><path class="r_uwoyl_r"/><path class="t2w8mls_d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:romania"} {...others} />);
}

export default Component;
