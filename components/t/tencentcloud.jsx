import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gnqxrgaqv.css';
import '../../css/e/eiyo1ccvq.css';
import '../../css/p/pi8rb54jk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gnqxrgaqv"/><path class="eiyo1ccvq"/><path class="pi8rb54jk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:tencentcloud"} {...others} />);
}

export default Component;
