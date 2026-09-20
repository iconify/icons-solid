import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g0a_25-9h.css';
import '../../css/m/mfxe6gbjn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="g0a_25-9h"/><path class="mfxe6gbjn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:archive-24"} {...others} />);
}

export default Component;
