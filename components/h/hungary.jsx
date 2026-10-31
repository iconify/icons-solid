import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d1x_6zbkv.css';
import '../../css/s/s4vfm1orq.css';
import '../../css/n/nm2s24x-y.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="d1x_6zbkv"/><path class="s4vfm1orq"/><path class="nm2s24x-y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:hungary"} {...others} />);
}

export default Component;
