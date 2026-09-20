import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wak7u4bkm.css';
import '../../css/u/uybk_4bpk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wak7u4bkm"/><path class="uybk_4bpk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:figma-line"} {...others} />);
}

export default Component;
