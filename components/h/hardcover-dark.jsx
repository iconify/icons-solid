import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lo7m7yb1l.css';
import '../../css/i/if85crc2z.css';
import '../../css/z/z-2dyjb2r.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="lo7m7yb1l"/><path class="if85crc2z"/><path class="z-2dyjb2r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:hardcover-dark"} {...others} />);
}

export default Component;
