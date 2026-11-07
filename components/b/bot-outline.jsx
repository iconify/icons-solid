import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s_fy29box.css';
import '../../css/q/qlvc8z3kf.css';
import '../../css/x/xcefx3l9e.css';
import '../../css/c/cf1g6vc0y.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s_fy29box"/><path class="qlvc8z3kf"/><path class="xcefx3l9e"/><path clip-rule="evenodd" class="cf1g6vc0y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bot-outline"} {...others} />);
}

export default Component;
