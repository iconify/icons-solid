import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x2wqd55dp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="x2wqd55dp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bar-chart-alt"} {...others} />);
}

export default Component;
