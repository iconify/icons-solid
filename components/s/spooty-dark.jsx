import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e5sc99b2m.css';
import '../../css/m/m3i3t-iqd.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="e5sc99b2m"/><path class="m3i3t-iqd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:spooty-dark"} {...others} />);
}

export default Component;
