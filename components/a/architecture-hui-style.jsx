import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c6_4fqd4v.css';
import '../../css/s/shsnm5blf.css';
import '../../css/y/yiub7sneg.css';
import '../../css/d/dk8py2-aj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="c6_4fqd4v"/><path class="shsnm5blf"/><path class="yiub7sneg"/><path class="dk8py2-aj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:architecture-hui-style"} {...others} />);
}

export default Component;
