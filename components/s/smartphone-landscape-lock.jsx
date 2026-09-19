import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rvw-7lb3m.css';

const viewBox = {"width":472,"height":384};
const content = `<path class="rvw-7lb3m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zmdi:smartphone-landscape-lock"} {...others} />);
}

export default Component;
