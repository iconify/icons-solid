import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kg4a_c4ev.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="kg4a_c4ev"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:git-fork-outline"} {...others} />);
}

export default Component;
