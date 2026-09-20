import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yy-f4-1dv.css';
import '../../css/l/l3-5_c46r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yy-f4-1dv"/><path clip-rule="evenodd" class="l3-5_c46r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:si"} {...others} />);
}

export default Component;
