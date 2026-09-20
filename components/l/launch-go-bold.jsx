import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/javv36f_m.css';
import '../../css/s/s44bm75jf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="javv36f_m"/><path class="s44bm75jf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:launch-go-bold"} {...others} />);
}

export default Component;
