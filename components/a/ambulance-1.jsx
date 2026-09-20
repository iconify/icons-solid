import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h6l40s97s.css';
import '../../css/l/l08ti_b-g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h6l40s97s"/><path clip-rule="evenodd" class="l08ti_b-g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:ambulance-1"} {...others} />);
}

export default Component;
