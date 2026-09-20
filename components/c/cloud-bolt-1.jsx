import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ii82hnrhg.css';
import '../../css/y/y0rh9nbet.css';

const viewBox = {"width":25,"height":25};
const content = `<path class="ii82hnrhg"/><path clip-rule="evenodd" class="y0rh9nbet"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:cloud-bolt-1"} {...others} />);
}

export default Component;
