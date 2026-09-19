import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/msf35150p.css';
import '../../css/c/ch6_fcbjy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="msf35150p"/><path class="ch6_fcbjy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:location-plus"} {...others} />);
}

export default Component;
