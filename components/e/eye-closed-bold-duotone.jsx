import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dxw0gio2t.css';
import '../../css/k/k8vhtfbem.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="dxw0gio2t"/><path class="k8vhtfbem"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:eye-closed-bold-duotone"} {...others} />);
}

export default Component;
