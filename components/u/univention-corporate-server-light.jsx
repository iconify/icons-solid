import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/anv3f7brl.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="anv3f7brl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:univention-corporate-server-light"} {...others} />);
}

export default Component;
