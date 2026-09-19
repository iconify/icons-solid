import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/psp9v-bal.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="psp9v-bal"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eva:recording-outline"} {...others} />);
}

export default Component;
