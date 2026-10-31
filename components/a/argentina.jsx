import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d1x_6zbkv.css';
import '../../css/q/qiwo0-boc.css';
import '../../css/f/f3g2acb4q.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="d1x_6zbkv"/><path class="qiwo0-boc"/><path class="f3g2acb4q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:argentina"} {...others} />);
}

export default Component;
