import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/spzykfbbj.css';
import '../../css/c/cdisl5apr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="spzykfbbj"/><path class="cdisl5apr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxs-map-pin"} {...others} />);
}

export default Component;
