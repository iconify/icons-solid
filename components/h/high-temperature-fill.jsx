import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tphv1z1vt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tphv1z1vt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:high-temperature-fill"} {...others} />);
}

export default Component;
