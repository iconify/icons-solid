import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/srmks4o_f.css';
import '../../css/h/h6on4ibgt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="srmks4o_f"/><path class="h6on4ibgt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:train-1"} {...others} />);
}

export default Component;
