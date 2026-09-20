import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fka0enb1w.css';
import '../../css/v/vocpnzbzx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fka0enb1w"/><path class="vocpnzbzx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:pisa-tower-line"} {...others} />);
}

export default Component;
