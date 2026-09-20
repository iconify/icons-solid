import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q8539_gwl.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="q8539_gwl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:dumbbell-large-outline"} {...others} />);
}

export default Component;
