import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/o/o7x5x1gvm.css';
import '../../css/g/gy4hwzihc.css';
import '../../css/t/tq4hd5byh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="o7x5x1gvm"/><path class="gy4hwzihc"/><path class="tq4hd5byh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:circle-navigation-sharp-two-tone"} {...others} />);
}

export default Component;
