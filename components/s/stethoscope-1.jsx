import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gu-vt6bap.css';

const viewBox = {"width":25,"height":24};
const content = `<path class="gu-vt6bap"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:stethoscope-1"} {...others} />);
}

export default Component;
