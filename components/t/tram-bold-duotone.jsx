import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2v64kbha.css';
import '../../css/i/i-hsyrblc.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="d2v64kbha"/><path class="i-hsyrblc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:tram-bold-duotone"} {...others} />);
}

export default Component;
