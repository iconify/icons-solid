import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i5_s4_b4r.css';
import '../../css/i/iukkl9xoe.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i5_s4_b4r"/><path class="iukkl9xoe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:10set"} {...others} />);
}

export default Component;
