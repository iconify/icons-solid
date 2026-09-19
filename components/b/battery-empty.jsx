import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ubpd-wbmq.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="ubpd-wbmq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"foundation:battery-empty"} {...others} />);
}

export default Component;
