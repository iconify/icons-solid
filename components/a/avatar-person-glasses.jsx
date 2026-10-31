import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/x/xyk-2qesv.css';
import '../../css/r/rbpsbgjtc.css';
import '../../css/w/wtql9tqyy.css';
import '../../css/x/xyya0kb1u.css';
import '../../css/s/s8z1hogeo.css';
import '../../css/v/v1i21g1uc.css';
import '../../css/t/t6rznhlss.css';
import '../../css/m/m9emfo10m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="wm-shadow xyk-2qesv"/><path class="rbpsbgjtc"/><path class="wtql9tqyy"/><path class="xyya0kb1u"/><path class="s8z1hogeo"/><path class="v1i21g1uc"/><path class="t6rznhlss"/><path class="m9emfo10m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:avatar-person-glasses"} {...others} />);
}

export default Component;
