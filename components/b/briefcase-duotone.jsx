import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y-p17xltj.css';
import '../../css/n/n7r-a_bnk.css';
import '../../css/r/rtl6i4bnc.css';
import '../../css/t/t-40-pbkj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="y-p17xltj"/><path class="n7r-a_bnk"/><path class="rtl6i4bnc"/><path class="t-40-pbkj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:briefcase-duotone"} {...others} />);
}

export default Component;
