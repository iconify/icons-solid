import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mglnvccod.css';
import '../../css/x/xzv0t0boi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mglnvccod"/><path class="xzv0t0boi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:window-close"} {...others} />);
}

export default Component;
