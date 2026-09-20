import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kd07yqmly.css';
import '../../css/z/zlrwl1bnk.css';
import '../../css/l/lstaoj3fp.css';
import '../../css/i/i7sr6ubzr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kd07yqmly"/><path class="zlrwl1bnk"/><path class="lstaoj3fp"/><path class="i7sr6ubzr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:hockey-mask"} {...others} />);
}

export default Component;
