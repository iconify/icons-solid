import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uqjbbobhb.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/d/d_1kwjbmh.css';
import '../../css/o/oun0_yubu.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><path id="SVGqfv97c4S" class="uqjbbobhb"/></defs><use href="#SVGqfv97c4S" class="mc2zb0bvp"/><use href="#SVGqfv97c4S" clip-rule="evenodd" class="d_1kwjbmh"/><path class="oun0_yubu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:arrow-reply-duotone"} {...others} />);
}

export default Component;
