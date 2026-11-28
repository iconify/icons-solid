import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/atdwg2krv.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/l11ovjb-s.css';
import '../../css/q/qw6pybb1f.css';
import '../../css/t/t-bwbsbwy.css';
import '../../css/j/j0tm0dnhj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="atdwg2krv secondary"/><g class="dt0cm9dhy primary"><path class="l11ovjb-s"/><path class="qw6pybb1f"/><path class="t-bwbsbwy"/><path class="j0tm0dnhj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:globe-pin-duo"} {...others} />);
}

export default Component;
