import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yuuxkorgd.css';
import '../../css/m/m61dewcpl.css';
import '../../css/w/wz4e5ub6c.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="yuuxkorgd"/><path class="m61dewcpl"/><path class="wz4e5ub6c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:owntone"} {...others} />);
}

export default Component;
