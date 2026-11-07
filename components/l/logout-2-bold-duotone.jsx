import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hgcuu1b3j.css';
import '../../css/q/qi9kc7bbe.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hgcuu1b3j"/><path clip-rule="evenodd" class="qi9kc7bbe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:logout-2-bold-duotone"} {...others} />);
}

export default Component;
