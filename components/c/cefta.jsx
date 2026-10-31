import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fgbzj_rvw.css';
import '../../css/y/y862trbtu.css';
import '../../css/e/e11mdeprk.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="fgbzj_rvw"/><path class="y862trbtu"/><path class="e11mdeprk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:cefta"} {...others} />);
}

export default Component;
