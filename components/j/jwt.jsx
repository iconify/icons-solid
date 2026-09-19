import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pc3yz6byc.css';
import '../../css/z/zdd0vz74c.css';
import '../../css/h/hz-xq7bsf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pc3yz6byc"/><path class="zdd0vz74c"/><path class="hz-xq7bsf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxl:jwt"} {...others} />);
}

export default Component;
