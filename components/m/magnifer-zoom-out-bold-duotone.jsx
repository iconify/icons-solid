import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aygw_60rm.css';
import '../../css/h/h09tvusar.css';
import '../../css/q/qy2alob5l.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="aygw_60rm"/><path class="h09tvusar"/><path clip-rule="evenodd" class="qy2alob5l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:magnifer-zoom-out-bold-duotone"} {...others} />);
}

export default Component;
