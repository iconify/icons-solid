import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qp1v2sdoj.css';
import '../../css/r/rwuazzztf.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="qp1v2sdoj"/><path class="rwuazzztf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:nextcloud-tasks"} {...others} />);
}

export default Component;
