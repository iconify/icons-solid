import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/i/i5z0-zbni.css';
import '../../css/q/q9hglwx5e.css';
import '../../css/g/g9w6hg7_i.css';
import '../../css/x/x_sh1cbwo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="i5z0-zbni"/><path class="q9hglwx5e"/><path class="g9w6hg7_i"/><path class="x_sh1cbwo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:password-block"} {...others} />);
}

export default Component;
