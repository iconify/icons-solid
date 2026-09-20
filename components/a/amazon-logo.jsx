import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/v/v8jfpyu2f.css';
import '../../css/g/g5e_usb1u.css';
import '../../css/o/o453h0bes.css';
import '../../css/q/q_hnbkb8u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="y9tr6bcfx"><path class="v8jfpyu2f"/><path class="g5e_usb1u"/><path clip-rule="evenodd" class="o453h0bes"/><path class="q_hnbkb8u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:amazon-logo"} {...others} />);
}

export default Component;
