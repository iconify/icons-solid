import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ar30v6f3w.css';
import '../../css/r/ra4bz523e.css';
import '../../css/w/wa0xce7qd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ar30v6f3w"/><circle class="ra4bz523e"/><circle class="wa0xce7qd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eva:browser-outline"} {...others} />);
}

export default Component;
