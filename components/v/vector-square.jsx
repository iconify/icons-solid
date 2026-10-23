import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mfj-4o4tk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mfj-4o4tk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:vector-square"} {...others} />);
}

export default Component;
