import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fazr8db2r.css';
import '../../css/g/g4blnhq_i.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="fazr8db2r"/><path clip-rule="evenodd" class="g4blnhq_i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:location-pin-3-solid"} {...others} />);
}

export default Component;
