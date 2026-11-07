import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zhocsxiwx.css';
import '../../css/h/hlr7qvbgb.css';
import '../../css/y/y1m3u927f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zhocsxiwx"/><path class="hlr7qvbgb"/><path class="y1m3u927f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:floor-lamp-minimalistic-bold"} {...others} />);
}

export default Component;
