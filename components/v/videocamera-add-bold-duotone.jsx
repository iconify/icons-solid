import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gn_f1tn5f.css';
import '../../css/n/n4onjj4ki.css';
import '../../css/d/dxbitbv-f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gn_f1tn5f"/><path class="n4onjj4ki"/><path class="dxbitbv-f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:videocamera-add-bold-duotone"} {...others} />);
}

export default Component;
