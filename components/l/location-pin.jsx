import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/d/dvjg30spu.css';
import '../../css/r/ru3ge-0dy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="dvjg30spu"/><path class="ru3ge-0dy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:location-pin"} {...others} />);
}

export default Component;
