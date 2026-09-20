import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bw8qyw07p.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bw8qyw07p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:pie-chart-2-line"} {...others} />);
}

export default Component;
