import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d-uqfkbjc.css';
import '../../css/y/yql3_6e3z.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="d-uqfkbjc"/><path clip-rule="evenodd" class="yql3_6e3z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:cart-4-outline"} {...others} />);
}

export default Component;
