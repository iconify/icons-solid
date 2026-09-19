import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9npbdcjc.css';
import '../../css/d/d8axicc0u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="y9npbdcjc"/><path class="d8axicc0u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxl:instagram"} {...others} />);
}

export default Component;
