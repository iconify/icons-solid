import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ojnmpz68t.css';
import '../../css/j/jsoljj9wy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ojnmpz68t"/><path class="jsoljj9wy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:guitar-amp"} {...others} />);
}

export default Component;
