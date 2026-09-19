import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d5_b2ukoj.css';
import '../../css/i/i2im_ubvg.css';
import '../../css/z/znj8j9blt.css';
import '../../css/a/ajshiibhv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="d5_b2ukoj"/><path clip-rule="evenodd" class="i2im_ubvg"/><path class="znj8j9blt"/><path clip-rule="evenodd" class="ajshiibhv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bitcoin-icons:exchange-filled"} {...others} />);
}

export default Component;
