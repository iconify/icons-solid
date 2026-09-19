import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wckr9kb1z.css';
import '../../css/w/wq8x2ubgv.css';
import '../../css/i/i1u8a2d8c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wckr9kb1z"/><circle class="wq8x2ubgv"/><path class="i1u8a2d8c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eva:info-outline"} {...others} />);
}

export default Component;
