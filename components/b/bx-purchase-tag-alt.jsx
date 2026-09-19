import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rrxw13bgw.css';
import '../../css/c/c6a7psbpd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rrxw13bgw"/><circle class="c6a7psbpd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bx-purchase-tag-alt"} {...others} />);
}

export default Component;
