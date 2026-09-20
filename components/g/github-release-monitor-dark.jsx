import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pjn8idhbx.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="pjn8idhbx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:github-release-monitor-dark"} {...others} />);
}

export default Component;
