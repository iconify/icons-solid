import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/y/yzp1v-7ov.css';
import '../../css/x/x3ts0cbdk.css';
import '../../css/o/owguy0bid.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="y9tr6bcfx"><path class="yzp1v-7ov"/><path class="x3ts0cbdk"/><path class="owguy0bid"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:eslint-logo"} {...others} />);
}

export default Component;
