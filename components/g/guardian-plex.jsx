import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rw2zl7-aa.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="rw2zl7-aa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:guardian-plex"} {...others} />);
}

export default Component;
