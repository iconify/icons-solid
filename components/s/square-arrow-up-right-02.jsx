import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/olvz54bxq.css';
import '../../css/z/zslfi4b0o.css';
import '../../css/p/pbwadabrx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="olvz54bxq"/><path class="zslfi4b0o"/><path class="pbwadabrx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:square-arrow-up-right-02"} {...others} />);
}

export default Component;
