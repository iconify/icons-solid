import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i3-9yacyq.css';
import '../../css/p/p796kerln.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="i3-9yacyq"/><path class="p796kerln"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:american-eagle"} {...others} />);
}

export default Component;
