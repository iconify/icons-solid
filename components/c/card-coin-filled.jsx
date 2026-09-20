import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xk0sot7vu.css';
import '../../css/z/z0zxjzbsu.css';
import '../../css/l/laec6ibgw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="xk0sot7vu"/><path class="z0zxjzbsu"/><path class="laec6ibgw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:card-coin-filled"} {...others} />);
}

export default Component;
