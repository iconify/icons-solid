import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hwda_fpmx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hwda_fpmx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:dumbbell-1"} {...others} />);
}

export default Component;
