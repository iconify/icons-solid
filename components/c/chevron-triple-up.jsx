import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/i/ixactvbks.css';
import '../../css/r/rsml70e1r.css';
import '../../css/q/qggd_up0u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="ixactvbks"/><path class="rsml70e1r"/><path class="qggd_up0u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:chevron-triple-up"} {...others} />);
}

export default Component;
