import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zuc6r60rn.css';
import '../../css/m/m041_sk4u.css';
import '../../css/y/yp1-ku-9n.css';
import '../../css/m/mvaxu_b9c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zuc6r60rn"/><path class="m041_sk4u"/><path class="yp1-ku-9n"/><path class="mvaxu_b9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:star-fall-bold"} {...others} />);
}

export default Component;
