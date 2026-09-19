import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h_0c644vy.css';
import '../../css/q/q4_c29bvt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h_0c644vy"/><path class="q4_c29bvt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:cupboard"} {...others} />);
}

export default Component;
