import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sl1h56gff.css';
import '../../css/z/zoh-vz08z.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sl1h56gff"/><path class="zoh-vz08z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eva:shake-fill"} {...others} />);
}

export default Component;
