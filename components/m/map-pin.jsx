import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xgxkgcndv.css';
import '../../css/e/e5703z3pa.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xgxkgcndv"/><path class="e5703z3pa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:map-pin"} {...others} />);
}

export default Component;
