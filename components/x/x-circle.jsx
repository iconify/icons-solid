import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q97ltfs3e.css';
import '../../css/g/gs5m2mmri.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="q97ltfs3e wm-k"/><path class="gs5m2mmri wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:x-circle"} {...others} />);
}

export default Component;
