import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/psqwx_-ti.css';
import '../../css/i/if85crc2z.css';
import '../../css/m/mc-ix1blr.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="psqwx_-ti"/><path class="if85crc2z"/><path class="mc-ix1blr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:hardcover-dark"} {...others} />);
}

export default Component;
