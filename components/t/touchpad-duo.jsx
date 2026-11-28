import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lp8-zubku.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/a/a2mjt-bdb.css';
import '../../css/y/y098b3jed.css';
import '../../css/r/ris9fsb6s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lp8-zubku secondary"/><g class="dt0cm9dhy primary"><path class="a2mjt-bdb"/><path class="y098b3jed"/><path class="ris9fsb6s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:touchpad-duo"} {...others} />);
}

export default Component;
