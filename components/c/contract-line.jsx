import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xy-4x9bfo.css';
import '../../css/p/pb7t6bclw.css';
import '../../css/t/tvu3xz-hl.css';

const viewBox = {"width":36,"height":36};
const content = `<path class="xy-4x9bfo"/><path class="pb7t6bclw"/><path class="tvu3xz-hl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:contract-line"} {...others} />);
}

export default Component;
