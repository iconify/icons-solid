import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e590h6bnt.css';
import '../../css/u/uxhv_0b0t.css';
import '../../css/f/fcvv9ibrt.css';
import '../../css/n/n9pu9miqg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="e590h6bnt"/><path class="uxhv_0b0t"/><path class="fcvv9ibrt"/><path class="n9pu9miqg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:trophy"} {...others} />);
}

export default Component;
