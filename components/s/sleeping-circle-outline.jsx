import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/prq9nybvi.css';
import '../../css/a/aljlp2--c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="prq9nybvi"/><path clip-rule="evenodd" class="aljlp2--c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:sleeping-circle-outline"} {...others} />);
}

export default Component;
