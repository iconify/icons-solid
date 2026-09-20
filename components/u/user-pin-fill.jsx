import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rhln61bon.css';
import '../../css/m/mvx_vib_d.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rhln61bon"/><path clip-rule="evenodd" class="mvx_vib_d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:user-pin-fill"} {...others} />);
}

export default Component;
