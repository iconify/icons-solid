import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lbiaezbeq.css';
import '../../css/u/uy-3x3bjx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lbiaezbeq"/><path class="uy-3x3bjx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:square-circle-24"} {...others} />);
}

export default Component;
