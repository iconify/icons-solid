import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uvjqu111s.css';
import '../../css/g/g91n7nble.css';
import '../../css/h/h6_9nma6v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="uvjqu111s"/><path class="g91n7nble"/><path class="h6_9nma6v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:helicopter-ambulance"} {...others} />);
}

export default Component;
