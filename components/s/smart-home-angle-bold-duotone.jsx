import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gswtq35or.css';
import '../../css/j/jo7hcbc0s.css';
import '../../css/n/n14vvqz5v.css';
import '../../css/e/erg4rkmlt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gswtq35or"/><path class="jo7hcbc0s"/><path class="n14vvqz5v"/><path class="erg4rkmlt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:smart-home-angle-bold-duotone"} {...others} />);
}

export default Component;
