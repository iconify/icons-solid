import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vthu1k3km.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vthu1k3km"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"simple-icons:remedyentertainment"} {...others} />);
}

export default Component;
