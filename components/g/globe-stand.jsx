import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v-log0e6r.css';
import '../../css/e/e4me81bwy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="v-log0e6r"/><path clip-rule="evenodd" class="e4me81bwy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:globe-stand"} {...others} />);
}

export default Component;
