import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dm_ni9ugb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dm_ni9ugb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:square-f4-filled"} {...others} />);
}

export default Component;
