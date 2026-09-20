import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jwj58vb_l.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jwj58vb_l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:chart-pie-3-fill"} {...others} />);
}

export default Component;
