import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sdh6q3bfd.css';
import '../../css/w/wxyj37b4a.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="sdh6q3bfd"/><path class="wxyj37b4a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:chimney-48-bold"} {...others} />);
}

export default Component;
