import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k7dcb4o8w.css';
import '../../css/x/x6gvil5vf.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="k7dcb4o8w"/><path class="x6gvil5vf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:graylog"} {...others} />);
}

export default Component;
