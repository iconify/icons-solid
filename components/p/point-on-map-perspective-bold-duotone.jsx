import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bg5jd3b1a.css';
import '../../css/a/a__o3db_x.css';
import '../../css/a/aaaprebjw.css';
import '../../css/v/v3dddsvcv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bg5jd3b1a"/><path class="a__o3db_x"/><path class="aaaprebjw"/><path class="v3dddsvcv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:point-on-map-perspective-bold-duotone"} {...others} />);
}

export default Component;
