import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wd96iokhh.css';
import '../../css/m/m6ybx_b2r.css';
import '../../css/b/bjmk_0bxk.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="wd96iokhh"/><path class="m6ybx_b2r"/><path class="bjmk_0bxk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:madagascar"} {...others} />);
}

export default Component;
