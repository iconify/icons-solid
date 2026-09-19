import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iw6nvx_mx.css';
import '../../css/c/cbwjarblr.css';
import '../../css/s/sod_7gkfc.css';

const viewBox = {"width":24,"height":24};
const content = `<circle class="iw6nvx_mx"/><circle class="cbwjarblr"/><path class="sod_7gkfc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bx-train"} {...others} />);
}

export default Component;
