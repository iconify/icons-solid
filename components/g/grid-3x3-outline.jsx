import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/splw5nbqc.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="splw5nbqc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:grid-3x3-outline"} {...others} />);
}

export default Component;
