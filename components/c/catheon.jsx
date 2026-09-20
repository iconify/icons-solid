import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w8qw16bmp.css';
import '../../css/r/rqcx1bj2b.css';
import '../../css/u/udfii55xf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="w8qw16bmp"/><path class="rqcx1bj2b"/><path class="udfii55xf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:catheon"} {...others} />);
}

export default Component;
