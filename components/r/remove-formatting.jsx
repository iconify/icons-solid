import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gw6dpjb4k.css';
import '../../css/t/t-v91db8t.css';
import '../../css/g/glwfk_a6x.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gw6dpjb4k wm-k"/><path class="t-v91db8t wm-s"/><path class="glwfk_a6x wm-s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:remove-formatting"} {...others} />);
}

export default Component;
