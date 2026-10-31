import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nmibc4bxr.css';
import '../../css/i/iapy6-b3y.css';
import '../../css/k/k4nbd5bvn.css';
import '../../css/p/pw1ieubeh.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="nmibc4bxr"/><path class="iapy6-b3y"/><path class="k4nbd5bvn"/><path class="pw1ieubeh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:greece"} {...others} />);
}

export default Component;
