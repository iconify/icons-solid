import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aygw_60rm.css';
import '../../css/r/r9znqobzq.css';
import '../../css/c/czuk_uaey.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="aygw_60rm"/><path clip-rule="evenodd" class="r9znqobzq"/><path class="czuk_uaey"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:magnifer-zoom-in-bold-duotone"} {...others} />);
}

export default Component;
