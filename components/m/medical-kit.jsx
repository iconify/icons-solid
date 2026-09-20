import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/okvu0ui1q.css';
import '../../css/e/e8e9occnp.css';
import '../../css/m/mdux50sgn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="okvu0ui1q"/><path clip-rule="evenodd" class="e8e9occnp"/><path clip-rule="evenodd" class="mdux50sgn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:medical-kit"} {...others} />);
}

export default Component;
