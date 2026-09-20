import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k4ny07b_a.css';
import '../../css/s/s0er2727y.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="k4ny07b_a"/><path class="s0er2727y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:drizzle-fill"} {...others} />);
}

export default Component;
