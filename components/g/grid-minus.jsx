import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/v/v7l97vx0k.css';
import '../../css/x/xcenf2bkt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="v7l97vx0k"/><path class="xcenf2bkt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:grid-minus"} {...others} />);
}

export default Component;
