import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g7t93nb3i.css';
import '../../css/q/qu8iegbod.css';
import '../../css/g/g7-s2nbhk.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="g7t93nb3i"/><path class="qu8iegbod"/><path class="g7-s2nbhk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:bahamas"} {...others} />);
}

export default Component;
