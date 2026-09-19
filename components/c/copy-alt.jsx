import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sn777jbnb.css';
import '../../css/f/ff5-g6s7q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sn777jbnb"/><path class="ff5-g6s7q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxs:copy-alt"} {...others} />);
}

export default Component;
