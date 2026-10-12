import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wk_0rpbzb.css';
import '../../css/r/r67ffobwc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wk_0rpbzb"/><path class="r67ffobwc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:sticky-note-minus-filled"} {...others} />);
}

export default Component;
