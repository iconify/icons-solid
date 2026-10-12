import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uvncfgbpp.css';
import '../../css/r/roohfabdx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="uvncfgbpp"/><path class="roohfabdx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:file-check-corner-filled"} {...others} />);
}

export default Component;
