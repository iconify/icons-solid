import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uw_jelzmb.css';
import '../../css/l/l_fae7rzf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="uw_jelzmb"/><path class="l_fae7rzf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:file-input-filled"} {...others} />);
}

export default Component;
