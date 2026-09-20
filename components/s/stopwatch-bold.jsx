import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zs9_h7bln.css';
import '../../css/n/ni31jpbcz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zs9_h7bln"/><path class="ni31jpbcz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:stopwatch-bold"} {...others} />);
}

export default Component;
