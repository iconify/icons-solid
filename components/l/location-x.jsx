import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fl6warb1x.css';
import '../../css/w/wwtp25bvp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fl6warb1x"/><path class="wwtp25bvp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:location-x"} {...others} />);
}

export default Component;
