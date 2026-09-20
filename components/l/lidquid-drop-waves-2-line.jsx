import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hux62626x.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hux62626x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"majesticons:lidquid-drop-waves-2-line"} {...others} />);
}

export default Component;
