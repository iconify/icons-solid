import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aygw_60rm.css';
import '../../css/d/dzoyk5cfz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="aygw_60rm"/><path clip-rule="evenodd" class="dzoyk5cfz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:minimalistic-magnifer-zoom-out-bold-duotone"} {...others} />);
}

export default Component;
