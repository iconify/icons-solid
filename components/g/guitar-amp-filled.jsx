import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/es35w10kr.css';
import '../../css/j/jzeym_btr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="es35w10kr"/><path class="jzeym_btr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:guitar-amp-filled"} {...others} />);
}

export default Component;
