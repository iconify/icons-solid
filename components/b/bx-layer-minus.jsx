import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc9dwfbws.css';
import '../../css/h/hj974yb2u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bc9dwfbws"/><path class="hj974yb2u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bx-layer-minus"} {...others} />);
}

export default Component;
