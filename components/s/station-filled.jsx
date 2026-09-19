import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mspp6ty_p.css';
import '../../css/e/eawnq8bpm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mspp6ty_p"/><path class="eawnq8bpm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:station-filled"} {...others} />);
}

export default Component;
