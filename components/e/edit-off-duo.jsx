import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nszsuhv2a.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/l37l5sboh.css';
import '../../css/u/uj_mr6b0o.css';
import '../../css/q/qjzyurbpi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nszsuhv2a secondary"/><g class="dt0cm9dhy primary"><path class="l37l5sboh"/><path class="uj_mr6b0o"/><path class="qjzyurbpi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:edit-off-duo"} {...others} />);
}

export default Component;
