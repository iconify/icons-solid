import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jdx-_oc4k.css';
import '../../css/r/rf06sdq9n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jdx-_oc4k wm-k"/><path class="rf06sdq9n wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:circle-arrow-left"} {...others} />);
}

export default Component;
