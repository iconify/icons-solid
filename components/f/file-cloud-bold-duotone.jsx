import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kgd8bzbml.css';
import '../../css/e/ey6plua8r.css';
import '../../css/x/x4f46-b2l.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="kgd8bzbml"/><path class="ey6plua8r"/><path class="x4f46-b2l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:file-cloud-bold-duotone"} {...others} />);
}

export default Component;
