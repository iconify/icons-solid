import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nayqy1c_r.css';
import '../../css/i/ir6vxx7sl.css';
import '../../css/l/lquqiwbln.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nayqy1c_r"/><path class="ir6vxx7sl"/><path class="lquqiwbln"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:rows-3-bold-duotone"} {...others} />);
}

export default Component;
