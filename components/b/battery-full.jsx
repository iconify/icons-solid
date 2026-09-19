import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ubpd-wbmq.css';
import '../../css/q/qklnfea4v.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="ubpd-wbmq"/><path class="qklnfea4v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"foundation:battery-full"} {...others} />);
}

export default Component;
