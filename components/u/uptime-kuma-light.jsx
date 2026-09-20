import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dvq1iklbg.css';

const viewBox = {"width":622,"height":622};
const content = `<path class="dvq1iklbg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:uptime-kuma-light"} {...others} />);
}

export default Component;
